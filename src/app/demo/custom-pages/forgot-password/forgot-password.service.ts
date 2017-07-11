import {Injectable} from "@angular/core";

import { Http } from '@angular/http';
@Injectable()
export class ForgotPasswrodService {
/**  private baseUrl = 'http://107.180.72.134/api/'; */
  private baseUrl = 'http://localhost/odcs-backend/public/api/';
  constructor(private http: Http){}
  
  forgotPasswrod(data){
       return this.http.post(this.baseUrl + 'forgot_password',data)
                 .map(res => res.json());
    }      
}
