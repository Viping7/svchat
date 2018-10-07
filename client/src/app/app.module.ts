import { UsermanagerService } from './usermanager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
 
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.route';
import { DashboardComponent } from './dashboard/dashboard.component';
const config: SocketIoConfig = { url: '/', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{useHash:true}),
    SocketIoModule.forRoot(config)
  ],
  providers: [UsermanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
