import { Component } from '@angular/core';
import {DriverService} from './driver.service';
import { User } from './user';

import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['../../static/css/login/style.css'],
    providers: [DriverService]
})
export class LoginComponent  { 
   
    username: string;
    password: string;
    user: User;

    constructor(private router: Router, private driverService: DriverService){
    }

    public login(){
        this.driverService.login(this.username, this.password);
    }
}