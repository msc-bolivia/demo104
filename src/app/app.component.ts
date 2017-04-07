import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { UsersPage } from '../pages/users/users';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = HomePage;
  @ViewChild(Nav) navMaster: Nav;

  pagesMenu: any[] = [
    {
      page: HomePage,
      title: 'Home',
      icon: 'home'
    },
    {
      page: TasksPage,
      title: 'Tasks REST',
      icon: 'list'
    },
    {
      page: UsersPage,
      title: 'Users',
      icon: 'people'
    }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage( item ){
    this.navMaster.setRoot( item.page );
  }
}

