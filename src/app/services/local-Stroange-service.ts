import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LocalStroangeService {

  localStorage: Storage;

  constructor() { }

  getLocalStorage(key:string)
  {
    return localStorage.getItem(key);
  }

  setLocalStorage(key:string, value:string)
  {
    return localStorage.setItem(key,value);
  }

  removeLocalStorage(key:string)
  {
    return localStorage.removeItem(key);
  }

  getIdDecodeToken()
  {
    let token  = String(this.getLocalStorage("token"))
    let id:number = Number(Object.values(jwtDecode(token))[0]);
    return id;
  }

  getMailDecodeToken()
  {
    let token  = String(this.getLocalStorage("token"))
    let mail:string = String(Object.values(jwtDecode(token))[1]);
    return mail;
  }

  getUserNameDecodeToken()
  {
    let token  = String(this.getLocalStorage("token"))
    console.log(String(Object.values(jwtDecode(token))))
    let name:string = String(Object.values(jwtDecode(token))[2]);
    return name;
  }

  getClaimsDecodeToken()
  {
    let token  = String(this.getLocalStorage("token"))
    let claim:string = String(Object.values(jwtDecode(token))[3]);
    return claim;
  }



}
