import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { MyCoins } from '../pages/my-coins/my-coins';
import { CoinLibrary } from '../pages/coin-library/coin-library';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'AngularFire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
declarations: [
  MyApp,
  HomePage,
  ListPage,
  Login,
  MyCoins,
  CoinLibrary
],
imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule
],
bootstrap: [IonicApp],
entryComponents: [
  MyApp,
  HomePage,
  ListPage,
  Login,
  MyCoins,
  CoinLibrary
],
providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  AngularFireModule
]
})
export class AppModule {}
