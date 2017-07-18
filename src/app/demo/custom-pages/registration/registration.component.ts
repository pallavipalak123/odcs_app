import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import {fadeInAnimation} from "../../../route.animation";
import {Router} from "@angular/router";

import { RegistrationService } from './registration.service';
import { NG_VALIDATORS,Validator,
         Validators,AbstractControl,ValidatorFn } from '@angular/forms';

@Component({
 
  selector: 'ms-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations:  [ fadeInAnimation ],
  providers:   [RegistrationService]
})


export class RegistrationComponent implements OnInit {
  
  name : string
  email : string
  password: string
  rePassword: string
  countryCode: string
  phone: string
  confirm: string

  forgotSuccessMessage: string;
  forgotFailMessage: string;

  public forgotSuccess = false;
  public forgotFail = false;
  
  constructor(
    private router: Router,
    private RegistrationService: RegistrationService,
   
   ) { 
   
    }



  ngOnInit() {
  }
  
  send(formValues) {
    console.log(formValues); 
      this.RegistrationService.registration(formValues)
         .subscribe(
        response => {
            this.forgotFail = false;
            console.log(response.message);
            this.router.navigate(['/login']);
            this.forgotSuccessMessage = response.message;
            this.forgotSuccess = true;
        },
        error => {
            this.forgotSuccess = false;
            console.log(error);
            alert('Please check all the fields and enter valid credentials.')
        
            const forgotFailErrorMessage =  JSON.parse(error._body);
            this.forgotFailMessage = forgotFailErrorMessage.message.email;
            this.forgotFail = true;
        }
    ) 
  }

}

