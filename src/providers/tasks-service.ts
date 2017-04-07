import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {

  url: string = 'http://jsonplaceholder.typicode.com';

  constructor(public http: Http) {
    console.log('Hello TasksService Provider');
  }

  getAll(){
    //return this.http.get(`${this.url}/todos`)
    return this.http.get(this.url+'/todos')
    .map(response => response.json())
    .toPromise();
  }

  create(task){
    //return this.http.post(`${this.url}/todos`)
    return this.http.post(this.url+'/todos', task)
    .map(response => response.json())
    .toPromise();
  }

  update(task){
    //return this.http.put(this.url+'/todos/'+task.id, task)
    return this.http.put(`${this.url}/todos/${task.id}`, task) @nicobytes
    .map(response => response.json())
    .toPromise();
  }

  delete(id){
    return this.http.delete(`${this.url}/todos/${id}`)
    .map(response => response.json())
    .toPromise();
  }

}
