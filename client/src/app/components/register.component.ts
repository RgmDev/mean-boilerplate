import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { User } from '../models/user';
import { UserService } from '../services/user.services'
import { IfObservable } from 'rxjs/observable/IfObservable';

declare var $: any

@Component({
  selector: 'register',
  templateUrl: '../views/register.html',
  providers: [
    UserService
  ]
})

export class RegisterComponent implements OnInit{
  public title = 'register'
  public user_register: User
  public identity
  public token
  public errorMessage
  public url: string
  public filesToUpload: Array<File>

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router 
  ){
    this.user_register = new User('', '', '', '', '', 'ROLE_USER', '')
    this.url = GLOBAL.url
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    $(document).on('change','.up', function(){
      if($(this).get(0).files.length > 0){
        $(this).closest('.form-group').find('.form-control').attr("value",$(this).get(0).files[0].name)
      }else{
        $(this).closest('.form-group').find('.form-control').attr("value", "");
      }    
    });
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
          $(".errorMessage").fadeIn('slow')
          this.user_register = new User('', '', '', '', '', 'ROLE_USER', '')
        }
      }, 
      error => {
        let errorMessage = <any>error
        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.errorMessage = body.message 
          $(".errorMessage").fadeIn('slow');
          console.log(error)
        }
      }
    )
  }


  fileChangeEvent(fileInput: any){
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

}
