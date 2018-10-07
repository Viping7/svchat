import { Socket } from 'ng-socket-io';
import { UsermanagerService } from './../usermanager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any =[];
  sUser: any;
  activeUser;
  constructor(private userManager:UsermanagerService, private socket:Socket) { 
    this.disconnectuser();
    var user =JSON.parse(sessionStorage.getItem('userData'));
    this.activeUser= user.username
    this.socket.emit('login', user);
    var selector = this;
    this.socket.fromEvent<any>('loginSuccess').subscribe(data=>{
      console.log(data);
      selector.userManager.setUsers(data.userlist);
    });
  }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    let allUsers;
    allUsers = this.userManager.getUsers();
    this.users = allUsers.filter(x=>x.username != this.activeUser)
    this.sUser = this.users[0]
  }
  selectedUser(user){
    this.sUser = user;
  }
  disconnectuser(){
    this.socket.fromEvent<any>('userDisconnected').subscribe(user=>{
      this.userManager.disconnectUser(user);
      this.getUsers();
    })
  }
}
