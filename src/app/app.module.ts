import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { MalfunctionComponent } from './components/malfunction.component';
import { SignupComponent } from './components/signup.component';
import { SignedUpComponent } from './components/signedUp.component';
import { DriverSignupComponent } from './components/driver-signup.component';
import { LoginComponent } from './components/login.component';
import { ServicesComponent } from './components/services.component';
import { CreatemalfunctionComponent } from './components/createmalfunction.component';
import { LogoutComponent } from './components/logout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AuthTokenInterceptor } from './components/authtoken.interceptor';
import { DriverService } from './components/driver.service';
import { MalfunctionService } from './components/malfunction.service';
import { CreatemalfunctionService } from './components/createmalfunction.service';


import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, routing, HttpClientModule, FormsModule, BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()],
  declarations: [LogoutComponent, ServicesComponent, CreatemalfunctionComponent, LoginComponent,
   AppComponent, UserComponent, AboutComponent, HomeComponent,
    MalfunctionComponent, SignedUpComponent, SignupComponent, DriverSignupComponent],
  bootstrap: [AppComponent],
  providers: [DriverService, MalfunctionService, CreatemalfunctionService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }]
})
export class AppModule { }
