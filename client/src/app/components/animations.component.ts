import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { GLOBAL } from '../services/global'
import { UserService } from '../services/user.services'

@Component({
  selector: 'buttons',
  templateUrl: '../views/animations.html',
  providers: [
    UserService
  ]
})

export class AnimationsComponent implements OnInit{
  public title = 'animations'
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
    console.log('animations component')
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
