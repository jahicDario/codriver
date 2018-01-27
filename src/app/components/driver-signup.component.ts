import { Component } from '@angular/core';
import {DriverService} from './driver.service';


@Component({
  selector: 'driver-sUp',
  templateUrl: './driver-signup.component.html',
  styleUrls: ['../../static/css/bootstrap.min.css',
'../../static/css/korisnik.css'],
  providers: [DriverService]
})
export class DriverSignupComponent {
  
    username: string;
    email: string;
    password: string;
    
    constructor(private driverService: DriverService){
    }


    public registerDriver(){
        console.log(this.driverService.registerDriver(this.username, this.email, this.password));
    }

    public openSignup(){
      console.log(this.driverService.socialSignup());
    }
}