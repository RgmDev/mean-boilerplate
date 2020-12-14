import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { UserService } from '../services/user.services'

@Component({
  selector: 'blank',
  templateUrl: '../views/blank.html',
  providers: [
    UserService
  ]
})

export class BlankComponent implements OnInit{
  public title = 'blank'
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
    console.log('blank component')
    if(!this.token){
      window.location.href = "/"
    }
  }

}
