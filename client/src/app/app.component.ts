import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from './services/global'
import { User } from './models/user';
import { UserService } from './services/user.services'

import 'template/js/demo/chart-area-demo.js'
import 'template/js/demo/chart-pie-demo.js'
import 'template/js/users-chart-table.js'
import 'template/js/demo/chart-bar-demo.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    UserService
  ]
})

export class AppComponent implements OnInit{
  public title = 'MEAN stack'
  public user: User
  public user_register: User
  public identity
  public token
  public errorMessage
  public url: string
  public reg: boolean

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.url = GLOBAL.url
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
  }

  public logOut(){
    localStorage.removeItem('identity')
    localStorage.removeItem('token')
    localStorage.clear();
    this.identity = null
    this.token = null 
    window.location.href = "/login"
  }


}
