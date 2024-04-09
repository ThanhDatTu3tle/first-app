import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class MegaMenuService {

    constructor(private http: HttpClient) {};

    getAllData() {
        return this.http.get('http://localhost:3000/menuData');
    }
}