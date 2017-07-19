import {Injectable} from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http){}
  
  login(data){
       return this.http.post('http://107.180.72.134/api/login',data)
                 .map(res => res.json());
    }      
}
