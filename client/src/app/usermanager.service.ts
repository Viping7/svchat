import { Injectable } from '@angular/core';

@Injectable()
export class UsermanagerService {

  constructor() { }
  setUsers(users){
    localStorage.setItem('users',JSON.stringify(users));
  }
  getUsers(){
    if(localStorage.getItem('users')){
    return JSON.parse(localStorage.getItem('users'))
    }
    else{
      return [];
    }
  }
  disconnectUser(user){
    var users = this.getUsers();
    users.splice(users.indexOf(user),1);

  }
}
