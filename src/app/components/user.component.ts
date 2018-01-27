import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    styleUrls: ['../../static/css/profile/about-us.css', '../../static/css/profile/framework.css',  
    '../../static/css/profile/demo.css'],
    
})
export class UserComponent  { 
    name: string;


    constructor(){
        this.name = "Dario";
    }

 }
