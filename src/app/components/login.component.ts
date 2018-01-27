import { Component } from '@angular/core';
import {DriverService} from './driver.service';
import { User } from './user';

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

    constructor(private driverService: DriverService){
    }

    public login(){
        this.driverService.login(this.username, this.password).subscribe(
            data => {
                localStorage.setItem("access_token", data.access_token);
            },
            err => {
                console.log(err);
            }
        );
        console.log(localStorage.getItem("access_token"));
        this.fetchProfileData();

    }
    public fetchProfileData(){
        this.driverService.fetchProfileData().subscribe(
            data => {
                localStorage.setItem("user_type", data.user_type);
                console.log(data);
              }
        );
        // console.log(localStorage.getItem("user_type"));
    }
}