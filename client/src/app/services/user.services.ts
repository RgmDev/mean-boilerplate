import { Injectable } from '@angular/core'
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable'
import { GLOBAL } from './global'
import { getHashes } from 'crypto'

@Injectable()
export class UserService{

  public url: string
  public identity: string
  public token: string

  constructor(private _http: Http){
    this.url = GLOBAL.url
  }

  singup(user_to_login, gethash = null){
    if(gethash != null){
      user_to_login.getHash = gethash
    }
    let json = JSON.stringify(user_to_login)
    let params = json
    let headers = new Headers({'Content-Type': 'application/json'})
    return this._http.post(this.url+'login', params, {headers: headers})
      .map(res => res.json())
  }

  register(user_to_register){
    let json = JSON.stringify(user_to_register)
    let params = json
    let headers = new Headers({'Content-Type': 'application/json'})
    return this._http.post(this.url+'saveUser', params, {headers: headers})
      .map(res => res.json())  
  }

  update_user(user_to_update){
    let json = JSON.stringify(user_to_update)
    let params = json
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this._http.put(this.url+'updateUser/'+user_to_update._id, params, {headers: headers})
      .map(res => res.json())  
  
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'))
    if(identity != undefined){
      this.identity = identity
    }else{
      this.identity = null
    }
    return this.identity
  }

  getToken(){
    let token = localStorage.getItem('token')
    if(token != undefined){
      this.token = token
    }else{
      this.token = null
    }
    return this.token
  }

  cleanLocalStorage(){
    localStorage.removeItem('identity')
    localStorage.removeItem('token')
    localStorage.clear();
  }

  getInfoToken(){
    let headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': this.getToken()
    })
    let options = new RequestOptions({ headers : headers })
    return this._http.get(this.url+'user/infoToken', options)
      .map(res => res.json())
  }

  getUsers(){
    let headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': this.getToken()
    })
    let options = new RequestOptions({ headers : headers })
    return this._http.get(this.url+'users', options)
      .map(res => res.json())
  }

  deleteUser(id_user){
    let headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': this.getToken()
    })
    let options = new RequestOptions({ headers : headers })
    return this._http.delete(this.url+'user/'+id_user, options)
      .map(res => res.json())
  }


}