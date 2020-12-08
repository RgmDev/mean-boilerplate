import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { UserService } from '../services/user.services'

import 'template/js/demo/chart-area-demo.js'
import 'template/js/demo/chart-pie-demo.js'

@Component({
  selector: 'home',
  templateUrl: '../views/home.html',
  providers: [
    UserService
  ]
})

export class HomeComponent implements OnInit{
  public title = 'home'
  public identity
  public token
  public url: string

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'home'
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
    this.url = GLOBAL.url
    
  }

  ngOnInit(){
    console.log('home')
    if(!this.token){
      window.location.href = "/"
    }
  }

  public logOut(){
    localStorage.removeItem('identity')
    localStorage.removeItem('token')
    localStorage.clear();
    this.identity = null
    this.token = null 
    this._router.navigate(['/'])
  }


}
