import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './components/wsprovider.service';
import { ChatService } from './components/wsconsumer.service';
import { NotificationsService } from 'angular2-notifications';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DriverService } from './components/driver.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['../static/css/bootstrap.min.css',
        '../static/css/style.css'],
    providers: [WebsocketService, ChatService]
})


export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
     
    public options = {
        position: ["bottom", "left"],
        timeOut: 5000,
        lastOnBottom: true
    }

    constructor( private driverService: DriverService, private notifService: NotificationsService, private chatService: ChatService) {
     
        chatService.messages.subscribe(msg => {
            console.log(msg.text);
            let tip = localStorage.getItem("user_type");
            if (tip == "S") {
                this.notifService.info(
                    msg.text,
                    'Novi kvar',
                    {
                        timeOut: 5000,
                        showProgressBar: false,
                        pauseOnHover: true,
                        clickToClose: true,
                        maxLength: 10
                    }
                )
            }
        });
    }
    ngOnInit(){
      this.isLoggedIn$ = this.driverService.isLoggedIn;
    }
    logout(){
        this.driverService.logout();
    }

}