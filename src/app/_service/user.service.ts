import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIURL = "http://localhost:80/api/"
  constructor(private httpClient:HttpClient) { }

  register(registerModel){
    console.log(registerModel);
    return this.httpClient.post(this.APIURL + 'register', registerModel)  
  }
}
