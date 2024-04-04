import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
}

@Injectable({
    providedIn: 'root',
})
export class UserProfileService {
    
    constructor(private http: HttpClient) {};

    changePassword(id: string, passEncrypt: string) {
        return this.http.put(`http://localhost:3000/employees/:${id}`, passEncrypt, httpOptions);
    }
}