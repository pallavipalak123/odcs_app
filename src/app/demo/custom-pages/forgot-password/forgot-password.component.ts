import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../../route.animation";
import {Router} from "@angular/router";

import { ForgotPasswrodService } from './forgot-password.service';

@Component({
  selector: 'ms-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations:  [ fadeInAnimation ],
  providers:   [ForgotPasswrodService]
})

export class ForgotPasswordComponent implements OnInit {

  email        : string;
  forgotSuccessMessage: string;
  forgotFailMessage: string;

  public forgotSuccess = false;
  public forgotFail = false;
  
  
  constructor(
    private router: Router,
    private forgotPasswrodService: ForgotPasswrodService
  ) { }

  ngOnInit() {
  }

  send(formValues) {
    console.log(formValues); 
      this.forgotPasswrodService.forgotPasswrod(formValues)
         .subscribe(
        response => {
            this.forgotFail = false;
            console.log(response.message);
            this.forgotSuccessMessage = response.message;
            this.forgotSuccess = true;
        },
        error => {
            this.forgotSuccess = false;
         console.log(error);
         const forgotFailErrorMessage =  JSON.parse(error._body);
            this.forgotFailMessage = forgotFailErrorMessage.message.email;
            this.forgotFail = true;
        }
    ) 
  }

}
