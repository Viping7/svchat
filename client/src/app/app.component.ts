import { Socket } from 'ng-socket-io';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor (private socket:Socket){

  }
  ngOnInit(){
    this.socket.on('connection',function(){
      alert("sdasd");
    })
  }
}
