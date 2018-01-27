import { Component } from '@angular/core';
import { WebsocketService } from './components/wsprovider.service';
import { ChatService } from './components/wsconsumer.service';
import { NotificationsService } from 'angular2-notifications';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['../static/css/bootstrap.min.css',
        '../static/css/style.css'],
    providers: [WebsocketService, ChatService]
})


export class AppComponent {

    loggedin: boolean;
    token: string;
    public options = {
        position: ["bottom", "left"],
        timeOut: 5000,
        lastOnBottom: true
    }

    constructor(private notifService: NotificationsService, private chatService: ChatService) {
        this.token = localStorage.getItem("access_token");
        if (this.token) {
            this.loggedin = true;
        } else {
            this.loggedin = false;
        }

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
}