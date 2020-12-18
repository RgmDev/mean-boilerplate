import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { User } from '../models/user';
import { UserService } from '../services/user.services'

declare var $: any

@Component({
  selector: 'users',
  templateUrl: '../views/users.html',
  providers: [
    UserService
  ]
})

export class UsersComponent implements OnInit{
  public title = 'users'
  public identity
  public token
  public url: string
  public user_register: User
  public user_edit: User
  public errorMessage
  public filesToUpload: Array<File>

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.url = GLOBAL.url
    this.user_register = new User('', '', '', '', '', 'ROLE_USER', '')
  }

  ngOnInit(){
    console.log('users component')
    this._userService.getInfoToken().subscribe(
      response => { 
        console.log('Valid token')
      }, 
      error => {
          console.log(error)
          this.identity = null
          this.token = null
          this._userService.cleanLocalStorage()
          window.location.href = "/"
      }
    )
  }

  onSubmitRegister(){ 
    if(this.filesToUpload.length > 0){
      this.makeFileRequest(this.url+'uploadImage', [], this.filesToUpload).then(
        (result: any) => {
          this.user_register.image = result.image
          this.registerUser()
        }
      )
    }else{
      this.registerUser()
    }
  }

  registerUser(){
    this._userService.register(this.user_register).subscribe(
      response => {
        let user = response.user
        this.user_register = user
        if(!user._id){
          this.errorMessage = 'Error al registrarse'
        }else{
          this.errorMessage = 'El registro se ha realizado correctamente ('+this.user_register.email+')'
          console.log(this.errorMessage)
          this.user_register = new User('', '', '', '', '', 'ROLE_USER', '')
          $("#btn-close-add-user").click()
          location.reload()
        }
      }, 
      error => {
        let errorMessage = <any>error
        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.errorMessage = body.message 
          console.log(error)
        }
      }
    )
  }

  fileChangeEvent(fileInput: any){
    console.log('file change event')
    this.filesToUpload = <Array<File>>fileInput.target.files    
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
    return new Promise(function(resolve, reject){
      var formData:any = new FormData()
      var xhr = new XMLHttpRequest()
      for(var i = 0; i < files.length; i++){
        formData.append('image', files[i], files[i].name)
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response))
          }else{
            reject(xhr.response)
          }
        }
      }
      xhr.open('POST', url, true)
      xhr.send(formData)
    })
  }

  onSubmitEdit(){
    let _id = $("#edit-id-user").val()
    let name = $("#edit-name").val()
    let surname = $("#edit-surname").val()
    let email = $("#edit-email").val()
    let role = $("#edit-role").val()
    let password = $("#edit-password").val()
    let image = $("#edit-image").val()
    let user_edit = {
      _id: _id,
      name: name,
      surname: surname,
      email: email,
      role: role
    }
    if(password){
      user_edit["password"] = password
    }

  
    if(this.filesToUpload){
      if(this.filesToUpload.length > 0){
        this.makeFileRequest(this.url+'uploadImage', [], this.filesToUpload).then(
          (result: any) => {
            user_edit["image"] = result.image    
            this.updateUser(user_edit)
          }
        )
      }
    }else{
      this.updateUser(user_edit)
    }
  
  }

  updateUser(user_edit){
    this._userService.update_user(user_edit).subscribe(
      response => {
        let user = response.user
        if(!user){
          this.errorMessage = 'Error al editar el usuario'
        }else{
          this.errorMessage = 'El usuario se ha editado correctamente'
          console.log(this.errorMessage)
          $("#btn-close-edit-user").click()
          location.reload()
        }
      }, 
      error => {
        let errorMessage = <any>error
        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.errorMessage = body.message 
          console.log(error)
        }
      }
    )
  }

  deleteUser(){
    let id_user = $('#delete-id-user').val()
    this._userService.deleteUser(id_user).subscribe(
      response => {
        let user = response.user
        if(!user){
          this.errorMessage = 'Error al eliminar el usuario'
        }else{
          this.errorMessage = 'El usuario se ha eliminado correctamente'
          console.log(this.errorMessage)
          $("#btn-close-delete-user").click()
          location.reload()
        }
      }, 
      error => {
        let errorMessage = <any>error
        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.errorMessage = body.message 
          console.log(error)
        }
      }
    )
  }

}
