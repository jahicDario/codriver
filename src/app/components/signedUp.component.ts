import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DriverService} from './driver.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'signed-up',
  templateUrl: './signedUp.component.html',
  styleUrls: ['../../static/css/bootstrap.min.css'],
  providers: [DriverService]
})
export class SignedUpComponent implements OnInit{
  
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private driverService: DriverService){
    }

    ngOnInit(){
        let token = this.activatedRoute.snapshot.queryParams.access_token;
        console.log("IZVUKO " + token);
        //let token: string = fragment.match(/^(.*?)&/)[1].replace('access_token=', '');
        //console.log("TOKEN: " + token);
    }
      
  }