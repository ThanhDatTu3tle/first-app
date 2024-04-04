import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
}

@Injectable({
    providedIn: 'root',
})
export class MegaMenuService {

    constructor(private http: HttpClient) {};

    getAllData() {
        return this.http.get('http://localhost:3000/menuData');
    }
}