import { Socket } from 'ng-socket-io';
import { Component, OnInit, Input, SimpleChanges, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(private socket:Socket) { }
	message;
	date;
	opts;
 sendlist=[];
 recieveList =[];
 @Input() selectedUser;
sendMessage(){
	if(this.message!=''){
		this.date=Date.now();
		this.selectedUser['msg'] = this.message;
		this.sendlist.push({msg:this.message,type:'send'});
		this.socket.emit('chat',this.selectedUser);
		var objDiv = document.getElementById("con");
		setTimeout(() => {objDiv.scrollTop = objDiv.scrollHeight},100);
		this.message='';
	}

}
	ngOnInit() {
		
	this.socket.fromEvent<any>('chat message').subscribe(data=>{
		console.log('data',data);
		this.date=Date.now();
		this.sendlist.push({msg:data,type:'recieve'});
	})
    this.opts = {
      position: 'right',
      barBackground: '#999',
		gridWidth:0,
		gridBackground:'transparent',
		barWidth:3
    }
	}
	
}
