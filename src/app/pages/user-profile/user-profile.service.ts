import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserProfileService {
    
    constructor(public http: HttpClient) {};

    getAll() {
        return this.http.get('localhost: 3000');
    }
}