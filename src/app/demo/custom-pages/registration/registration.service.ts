import {Injectable} from "@angular/core";

import { Http } from '@angular/http';
@Injectable()
export class RegistrationService {

  constructor(private http: Http){}
  
  registration(data){
       return this.http.post('http://107.180.72.134/api/customers',data)
                 .map(res => res.json());
    }      
}
