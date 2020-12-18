import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { UserService } from '../services/user.services'


@Component({
  selector: 'home',
  templateUrl: '../views/home.html',
  providers: [
    UserService
  ]
})

export class HomeComponent implements OnInit{
  public title = 'home component'
  public identity
  public token
  public url: string

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.url = GLOBAL.url
    
  }

  ngOnInit(){
    console.log('home')
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

}
