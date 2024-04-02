// import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import data from '../../../employeesData.json';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  users: any = data; 

  isLoggedIn(){
    return sessionStorage.getItem('email') != null;
  }

  getRole(){
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }

  // getUserByCode(id: any){
  //   return this.http.get(this.apiUrl + '/' + id);
  // }
 
  getGeolocation(latitude: any, longitude: any) {
    return this.http.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=86ad1877687a41309ceed02187497761`);
  }
}
