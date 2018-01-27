import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './wsprovider.service';

const CHAT_URL = 'ws://suvozac.herokuapp.com/chat/1/';

export interface Message {
    text: string
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService) {
        this.messages = <Subject<Message>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Message => {
                return {
                    text: response.data
                }
            });
    }
}