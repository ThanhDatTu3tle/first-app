import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root',
})
export class TaskListService {

  constructor(private http: HttpClient) {};

  getAllEmployees() {
    return this.http.get('http://localhost:3000/employees/');
  }
 
  getAllTaskList() {
    return this.http.get('http://localhost:3000/taskList');
  }
}
