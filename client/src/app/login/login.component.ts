import { UsermanagerService } from './../usermanager.service';
import { Socket } from 'ng-socket-io';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: any;
  constructor(private router:Router,private socket:Socket, private userManager:UsermanagerService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = new FormGroup({
      email:new FormControl('',Validators.required)
      // password:new FormControl('',Validators.required),
    })
  }

  login(){
    if(this.loginForm.valid){
      let userObj = { username:this.loginForm.value.email};
      this.socket.emit('login',userObj);
      sessionStorage.setItem('userData',JSON.stringify(userObj))
      let selector = this;
      this.socket.fromEvent<any>('loginSuccess').subscribe(data=>{
        console.log(data);
        selector.userManager.setUsers(data.userlist);
        selector.router.navigate(['/dashboard']);
      });
    // this.http.post('/users/login',userObj).subscribe(res=>{
    //   if(res.success){
    //     debugger;
    //     if(typeof res.data == 'object'){
    //       localStorage.setItem('access_token',res.data.token);
    //       localStorage.setItem('user',JSON.stringify(res.data.user));
    //       this.http.httpPost('/userdetails/getParticipants',{participants:res.data.user.username}).subscribe(res=>{
    //         localStorage.setItem('userDetails',JSON.stringify(res.data[0]));
    //         this.router.navigate(['/tickets'])            
    //       })
    //     }
    //     else{
    //       this.loginError = res.data;
    //     }
    //   }
    // })
  }else{
    console.log('Something')
  }
  }

}
