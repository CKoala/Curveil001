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
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
apiKey: "AIzaSyCCrYipra2oP91goMAR1v68UPwqca9nJwM",
authDomain: "curveil001-f3d30.firebaseapp.com",
databaseURL: "https://curveil001-f3d30.firebaseio.com",
projectId: "curveil001-f3d30",
storageBucket: "curveil001-f3d30.appspot.com",
messagingSenderId: "736002705697"
};

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
  AngularFireModule.initializeApp(firebaseConfig),
  HttpModule,
  HttpClientModule
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
  AngularFireModule ,
  AngularFirestore
]
})
export class AppModule {}
