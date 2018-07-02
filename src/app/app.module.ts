import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdditemPage } from '../pages/additem/additem';
import { ViewdetailsPage } from '../pages/viewdetails/viewdetails';
import{AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore'
import { TodoProvider } from '../providers/todo/todo';
import {Environment} from './environment';
import { SongProvider } from '../providers/song/song';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdditemPage,
    ViewdetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Environment.config),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdditemPage,
    ViewdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    SongProvider,
  ]
})
export class AppModule {}
