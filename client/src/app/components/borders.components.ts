import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { UserService } from '../services/user.services'

@Component({
  selector: 'buttons',
  templateUrl: '../views/borders.html',
  providers: [
    UserService
  ]
})

export class BordersComponent implements OnInit{
  public title = 'borders'
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
    console.log('borders component')
    if(!this.token){
      window.location.href = "/"
    }
  }


}
