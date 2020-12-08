import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { User } from '../models/user';
import { UserService } from '../services/user.services'

declare var $: any

@Component({
  selector: 'login',
  templateUrl: '../views/login.html',
  providers: [
    UserService
  ]
})

export class LoginComponent implements OnInit{
  public title = 'login'
  public user: User
  public identity
  public token
  public errorMessage
  public url: string

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.user = new User('', '', '', '', '', '', '')
    this.url = GLOBAL.url
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
  }

  public onSubmit(){

    this._userService.singup(this.user).subscribe(
      response => {
        let identity = response.user
        this.identity = identity
        if(!this.identity._id){
          alert("El usuario no esta correctamente identificado")
        }else{
          localStorage.setItem('identity', JSON.stringify(identity))
          this._userService.singup(this.user, true).subscribe(
            response => {
              let token = response.token
              this.token = token
              if(this.token.length <= 0){
                alert("El token no se ha generado")
              }else{
                localStorage.setItem('token', JSON.stringify(token))
                this.user = new User('', '', '', '', '', '', '')
                window.location.href = "/home"
              }
              
            }, 
            error => {
              let errorMessage = <any>error
              if(errorMessage != null){
                var body = JSON.parse(error._body)
                this.errorMessage = body.message 
                console.log(error)
                $(".errorMessage").fadeIn('slow');
              }
            }
          )
          

        }
      }, 
      error => {
        let errorMessage = <any>error
        if(errorMessage != null){
          var body = JSON.parse(error._body)
          this.errorMessage = body.message 
          console.log(error)
          $(".errorMessage").fadeIn('slow');
        }
      }
    )
    

  }

}
