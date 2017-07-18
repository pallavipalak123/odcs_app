import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../../route.animation";
import {Router} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginService } from './login.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';


@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations:  [ fadeInAnimation ],
  
  providers:   [ LoginService]
})

export class LoginComponent implements OnInit {
  
  email : string
  password: string
  
  
  forgotSuccessMessage: string;
  forgotFailMessage: string;
  
   private toastService: ToasterService;
  public forgotSuccess = false;
  public forgotFail = false;
  
  
  constructor(
    private router: Router,
    public toastr: ToasterModule,
    public toasterService: ToasterService,
    private LoginService: LoginService
  ) { 
 
  }

  ngOnInit() {
  }

  send(formValues) {
    console.log(formValues); 
      this.LoginService.login(formValues)
         .subscribe(
        response => {
            this.forgotFail = false;
            console.log(response.message);
            this.toasterService.pop('success', 'Args title', 'Args body');
            this.router.navigate(['/dashboard-v1']);
            console.log('Logged in successfully. A verification message is sent on your email id.')
            this.forgotSuccessMessage = response.message;
            this.forgotSuccess = true;
        },
        error => {
            this.forgotSuccess = false;
            console.log(error);
            console.log('You have entered invalid credentials')
            this.toasterService.pop('error', 'title', 'body');
            const forgotFailErrorMessage =  JSON.parse(error._body);
            this.forgotFailMessage = forgotFailErrorMessage.message.email;
            this.forgotFail = true;
        }
    ) 
  }

}