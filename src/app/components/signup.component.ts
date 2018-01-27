import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../static/css/bootstrap.min.css',
'../../static/css/style.css']
})
export class SignupComponent {
  public onClick(){
    console.log("KLIKN'O SAM!!!");
  }
}