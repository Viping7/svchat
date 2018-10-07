webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng_socket_io_1 = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(socket) {
        this.socket = socket;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.socket.on('connection', function () {
            alert("sdasd");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng_socket_io_1.Socket])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var usermanager_service_1 = __webpack_require__("./src/app/usermanager.service.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ng_socket_io_1 = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var chat_component_1 = __webpack_require__("./src/app/chat/chat.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_route_1 = __webpack_require__("./src/app/app.route.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var config = { url: '/', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                chat_component_1.ChatComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(app_route_1.routes, { useHash: true }),
                ng_socket_io_1.SocketIoModule.forRoot(config)
            ],
            providers: [usermanager_service_1.UsermanagerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
exports.routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];


/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0\">\r\n\t<div class=\"col-md-12 p-0\" (click)='resetCounter()'>\r\n\t\t<div class=\"chat-box\">\r\n\t\t\t<div class=\"convo-sec\" id='con' >\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<li *ngFor='let i of sendlist' [class]='i.type'>\r\n\t\t\t\t\t\t<p>{{i.msg}}</p>\r\n\t\t\t\t\t\t<span class=\"date\">{{date | date:'hh:mm'}} | {{date |date:' d MMM,yy'}}</span>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class='text-box'>\r\n\r\n\t\t\t\t<div class=\"input-area\">\r\n\t\t\t\t\t<form name=\"chat-form\">\r\n\t\t\t\t\t\t<input type='text' placeholder=\"Type your message here...\" [(ngModel)]='message' name=\"message\" autocomplete=\"off\"\t>\r\n\t\t\t\t\t\t<div class=\"btn-sec\">\r\n\t\t\t\t\t\t\t<button (click)='sendMessage()' type=\"submit\" class=\"btn btn-custom black\">Send</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/***/ (function(module, exports) {

module.exports = ".chat-box {\n  border: 1px solid #ccc;\n  position: relative;\n  height: 100vh; }\n  .chat-box .convo-sec {\n    padding-top: 15px;\n    height: 86vh;\n    overflow: auto; }\n  .chat-box .convo-sec ul {\n      padding-left: 13px; }\n  .chat-box .convo-sec li {\n      display: block;\n      padding: 10px;\n      border-radius: 10px;\n      max-width: 60%;\n      width: auto;\n      min-width: 20%;\n      position: relative;\n      clear: both;\n      margin-bottom: 40px; }\n  .chat-box .convo-sec li.send {\n        float: right;\n        background: #eee;\n        margin-right: 13px; }\n  .chat-box .convo-sec li.recieve {\n        float: left;\n        border: 1px solid rgba(153, 153, 153, 0.58); }\n  .chat-box .convo-sec li .date {\n        position: absolute;\n        right: 0px;\n        font-size: 12px;\n        color: rgba(51, 51, 51, 0.8);\n        bottom: -20px; }\n  .chat-box .convo-sec li h4 {\n        float: left;\n        margin: 0px;\n        margin-right: 20px;\n        font-size: 15px;\n        font-weight: 600; }\n  .chat-box .convo-sec li p {\n        clear: both;\n        word-wrap: break-word;\n        margin: 5px 0px; }\n  .chat-box .text-box {\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    width: 100%;\n    background: #eee;\n    padding: 10px; }\n  .chat-box .text-box .input-area input[type=text] {\n      border: none;\n      display: inline-block;\n      padding: 8px 15px;\n      width: 90%; }\n  .chat-box .text-box .input-area input[type=text]:focus {\n        outline: none; }\n  .chat-box .text-box .input-area input[type=file] {\n      display: none; }\n  .chat-box .text-box .btn-sec {\n      display: inline-block;\n      width: 8%;\n      padding: 7px 0px;\n      margin-left: -3px; }\n  .chat-box .text-box .btn-sec .btn-custom.black {\n        padding: 6.5px 30px; }\n  .chat-box .text-box .btn-sec img {\n        width: 15px; }\n  .chat-box .text-box .btn-sec a {\n        margin: 0px 3px; }\n  .chat-box .text-box .btn-sec a label {\n          padding: 0px;\n          cursor: pointer;\n          display: inline; }\n  .chat-box .text-box .btn-sec .send-btn {\n        background: none;\n        border: none;\n        margin-left: 5px;\n        border-left: 1px solid #ccc; }\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng_socket_io_1 = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(socket) {
        this.socket = socket;
        this.sendlist = [];
        this.recieveList = [];
        this.unreadMessages = new core_1.EventEmitter();
        this.resetMsgCounter = new core_1.EventEmitter(false);
    }
    ChatComponent.prototype.sendMessage = function () {
        if (this.message != '') {
            this.date = Date.now();
            this.selectedUser['msg'] = this.message;
            this.sendlist.push({ msg: this.message, type: 'send' });
            this.socket.emit('chat', this.selectedUser);
            var objDiv = document.getElementById("con");
            setTimeout(function () { objDiv.scrollTop = objDiv.scrollHeight; }, 100);
            this.message = '';
        }
    };
    ChatComponent.prototype.resetCounter = function () {
        this.resetMsgCounter.emit(true);
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.fromEvent('chat message').subscribe(function (data) {
            console.log('data', data);
            _this.date = Date.now();
            _this.sendlist.push({ msg: data, type: 'recieve' });
            _this.unreadMessages.emit(1);
            var objDiv = document.getElementById("con");
            setTimeout(function () { objDiv.scrollTop = objDiv.scrollHeight; }, 100);
        });
        this.opts = {
            position: 'right',
            barBackground: '#999',
            gridWidth: 0,
            gridBackground: 'transparent',
            barWidth: 3
        };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "selectedUser", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "unreadMessages", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "resetMsgCounter", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_socket_io_1.Socket])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 sidebar\">\r\n      <div class=\"profile-user\">\r\n        <h4>{{activeUser}}</h4>\r\n      </div>\r\n      <ul>\r\n        <li *ngFor='let user of users' (click)='selectedUser(user)' [ngClass]='{\"active\":user==sUser}'>{{user.username}} <span class=\"badge badge-info pull-right\" [hidden]='messagesUnread<=0'>{{messagesUnread}}</span></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-9 p-0\">\r\n      <app-chat [selectedUser]='sUser' (unreadMessages)='unreadMessages($event)' (resetMsgCounter)='resetCounter($event)'></app-chat>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  background: #fafafa;\n  padding: 0px; }\n  .sidebar .profile-user {\n    background: #1aceb5;\n    padding: 20px; }\n  .sidebar .profile-user h4 {\n      color: #fff;\n      text-transform: capitalize;\n      font-weight: 400; }\n  .sidebar ul {\n    padding: 0px;\n    margin: 10px 0px; }\n  .sidebar ul li {\n      display: block;\n      padding: 20px;\n      text-transform: capitalize;\n      font-weight: 400;\n      border-top: 1px solid #eee;\n      border-bottom: 1px solid #eee; }\n  .sidebar ul li:hover {\n        background: #eee;\n        cursor: pointer; }\n  .sidebar ul li.active {\n        background: #f1f1f1;\n        color: #1aceb5; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng_socket_io_1 = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
var usermanager_service_1 = __webpack_require__("./src/app/usermanager.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userManager, socket) {
        this.userManager = userManager;
        this.socket = socket;
        this.users = [];
        this.messagesUnread = 0;
        this.disconnectuser();
        var user = JSON.parse(sessionStorage.getItem('userData'));
        this.activeUser = user.username;
        this.socket.emit('login', user);
        var selector = this;
        this.socket.fromEvent('loginSuccess').subscribe(function (data) {
            console.log(data);
            selector.userManager.setUsers(data.userlist);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    DashboardComponent.prototype.getUsers = function () {
        var _this = this;
        var allUsers;
        allUsers = this.userManager.getUsers();
        this.users = allUsers.filter(function (x) { return x.username != _this.activeUser; });
        this.sUser = this.users[0];
    };
    DashboardComponent.prototype.selectedUser = function (user) {
        this.sUser = user;
        this.messagesUnread = 0;
    };
    DashboardComponent.prototype.disconnectuser = function () {
        var _this = this;
        this.socket.fromEvent('userDisconnected').subscribe(function (user) {
            _this.userManager.disconnectUser(user);
            _this.getUsers();
        });
    };
    DashboardComponent.prototype.resetCounter = function (flag) {
        if (flag) {
            this.messagesUnread = 0;
        }
    };
    DashboardComponent.prototype.unreadMessages = function (num) {
        console.log(num);
        this.messagesUnread += num;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [usermanager_service_1.UsermanagerService, ng_socket_io_1.Socket])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"account\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"side-banner\">\r\n        <div class=\"col-md-6\">\r\n<div class=\"login-signup\">\r\n  <div class=\"table-display\">\r\n      <div class=\"align-middle\">\r\n        <h2>\r\n          <span>Login</span> to continue your progress</h2>\r\n        <form [formGroup]='loginForm'>\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName='email'>\r\n          </div>\r\n          <!-- <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" formControlName='password'>\r\n          </div> -->\r\n          <button type='button' class=\"btn btn-custom black\" [disabled]=\"!loginForm.valid\"  (click)='login()'>Proceed</button>\r\n          <p class='error' *ngIf='loginError'>{{loginError}}</p>\r\n        </form>\r\n        <h3>Dont have an account yet? <a href=\"javascript:;\" routerLink = '/accounts/signup'><span>Sign up</span></a></h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".account {\n  font-family: 'Montserrat', sans-serif;\n  height: 100vh; }\n  .account .side-banner {\n    height: 100vh;\n    padding: 0px 50px;\n    background: url('back.499dd317a684573bde82.jpg') no-repeat;\n    background-size: 100%;\n    background-position: center;\n    width: 100%; }\n  .account .side-banner .logo-cont {\n      margin-left: 50px;\n      display: table-cell; }\n  .account .side-banner .logo-cont img {\n        width: 350px; }\n  .account .side-banner .logo-cont h1 {\n        margin-top: 20px;\n        color: #fff;\n        font-weight: 100;\n        font-size: 25px; }\n  .account .side-banner .footer {\n      position: absolute;\n      bottom: 0px;\n      width: 100%;\n      padding: 0px 50px;\n      left: 0px;\n      color: #fff; }\n  .account .side-banner .footer h3 {\n        float: left;\n        font-size: 13px;\n        font-weight: 400; }\n  .account .side-banner .footer ul {\n        float: right; }\n  .account .side-banner .footer ul li {\n          display: inline-block;\n          margin: 0px 10px; }\n  .account .side-banner .footer ul li a {\n            color: #fff;\n            font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var usermanager_service_1 = __webpack_require__("./src/app/usermanager.service.ts");
var ng_socket_io_1 = __webpack_require__("./node_modules/ng-socket-io/dist/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, socket, userManager) {
        this.router = router;
        this.socket = socket;
        this.userManager = userManager;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    LoginComponent.prototype.initializeForm = function () {
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', forms_1.Validators.required)
            // password:new FormControl('',Validators.required),
        });
    };
    LoginComponent.prototype.login = function () {
        if (this.loginForm.valid) {
            var userObj = { username: this.loginForm.value.email };
            this.socket.emit('login', userObj);
            sessionStorage.setItem('userData', JSON.stringify(userObj));
            var selector_1 = this;
            this.socket.fromEvent('loginSuccess').subscribe(function (data) {
                console.log(data);
                selector_1.userManager.setUsers(data.userlist);
                selector_1.router.navigate(['/dashboard']);
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
        }
        else {
            console.log('Something');
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ng_socket_io_1.Socket, usermanager_service_1.UsermanagerService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/usermanager.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var UsermanagerService = /** @class */ (function () {
    function UsermanagerService() {
    }
    UsermanagerService.prototype.setUsers = function (users) {
        localStorage.setItem('users', JSON.stringify(users));
    };
    UsermanagerService.prototype.getUsers = function () {
        if (localStorage.getItem('users')) {
            return JSON.parse(localStorage.getItem('users'));
        }
        else {
            return [];
        }
    };
    UsermanagerService.prototype.disconnectUser = function (user) {
        var users = this.getUsers();
        users.splice(users.indexOf(user), 1);
    };
    UsermanagerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UsermanagerService);
    return UsermanagerService;
}());
exports.UsermanagerService = UsermanagerService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map