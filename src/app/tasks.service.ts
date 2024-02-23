import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Task } from './model/Task';
//import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: Http) {   }

  getTask(){
//    return this.http.get('http://localhost:1337/tasks').map(res => res.json());
  }

  addTask(){
    var header = new Headers();
    header.append('Content-Type', 'application/json');
//    return this.http.post('http://localhost:1337/tasks', 'newTask', {headers: header}).map(res => res.json());
  }

  deleteTask(id: number){
//    return this.http.delete('http://localhost:1337/tasks/' + id).map(res => res.json());
  }
}
