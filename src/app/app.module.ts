import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TasksPage } from '../pages/tasks/tasks';
import { UsersPage } from '../pages/users/users';

import { UsersService } from '../providers/users-service';
import { TasksService } from '../providers/tasks-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TasksPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TasksPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService,
    UsersService,
    TasksService    
  ]
})
export class AppModule {}
