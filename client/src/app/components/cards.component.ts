import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { UserService } from '../services/user.services'

@Component({
  selector: 'cards',
  templateUrl: '../views/cards.html',
  providers: [
    UserService
  ]
})

export class CardsComponent implements OnInit{
  public title = 'cards'
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
    console.log('cards component')
    if(!this.token){
      window.location.href = "/"
    }
  }


}
