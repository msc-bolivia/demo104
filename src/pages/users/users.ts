import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersService } from '../../providers/users-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usersService: UsersService
  ) {
  }

  ionViewDidLoad() {
    this.usersService.getAll()
    .then(data =>{
      this.users = data.results;
    })
    .catch( error =>{
      console.error( error );
    });
  }

}
