import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {};

  isLoggedIn(){
    return sessionStorage.getItem('login_name') != null;
  }

  getRole(){
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }

  // getUserByCode(id: any){
  //   return this.http.get(this.apiUrl + '/' + id);
  // }

  getAllEmployees() {
    return this.http.get('http://localhost:3000/employees/');
  }

  // Cách 1:
  postLogin(data: any): Observable<any> {
    return this.http.post<any>(
      'https://audit-api.acacy.vn/api/Account/Login',
      {
        'login_name': data.login_name,
        'password': data.password
      },
      httpOptions
    )
  }

  // Cách 2:
  // postLogin2(p1: string, p2: string) {
  //   const body = new FormData();
  //   body.append('login_name', p1.toString());
  //   body.append('password', p2.toString());

  //   return this.http.post<any>(
  //     'https://audit-api.acacy.vn/api/Account/Login',
  //     body,
  //     httpOptions
  //   )
  // }
 
  getGeolocation(latitude: any, longitude: any) {
    return this.http.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=86ad1877687a41309ceed02187497761`);
  }
}
