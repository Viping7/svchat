var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
var port=process.env.PORT || 8080;
var server = app.listen(port)
var io = require('socket.io').listen(server);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./release'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'./release/index.html');

});
var userList = [];
io.on('connection',(socket)=>{
var username;
socket.on('login',(userDetails)=>{
    console.log(userList)
    var user = {
        username:userDetails.username,
        socketId : socket.id
    };
    username = user.username;
    var connectedUser = userList.filter( x => {
        return x.username == username
    });    
    if(connectedUser.length<=0){
        userList.push(user);
    }
    console.log(userList);
    socket.emit('loginSuccess',{status:true,userlist:userList});
})  

socket.on('disconnect',()=>{
    console.log(username);
    var disconnectedUser = userList.filter( x => {
        return x.username == username
    })[0];
   userList.splice(userList.indexOf(disconnectedUser),1);
   console.log(userList);
   socket.emit('userDisconnected',disconnectedUser);
});

socket.on('chat',(reqContent)=>{
    console.log(reqContent);
    console.log(userList);
    let toUser = userList.filter(x=>{
        return reqContent.username == x.username;
    })[0];
    console.log(toUser.socketId);
    io.to(toUser.socketId).emit('chat message',reqContent.msg);
});

});
