import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  url: string = 'https://randomuser.me/api/?results=50';

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  getAll(){
    return this.http.get(this.url)
    .map(response => response.json())
    .toPromise();
  }

}
