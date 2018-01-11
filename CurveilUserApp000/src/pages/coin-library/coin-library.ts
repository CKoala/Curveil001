import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//simport { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-coin-library',
  templateUrl: 'coin-library.html',
})
export class CoinLibrary {

  user: Observable<firebase.User>
  displayName;
  email;
  user_id;
  //title: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController,/* private db: AngularFireDatabase, private afAuth: AngularFireAuth,*/ public navParams: NavParams) {
  //this.user = afAuth.authState;

  /*afAuth.authState.subscribe(user => {
    if (!user) {
      this.displayName = null;
      this.email = null;
      this.user_id = null;
      return
      }
      this.displayName = user.displayName;
      this.email = user.email;
      this.user_id = user.uid;
      })
      */
     // this.title = db.object('//')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinLibrary');
  }

}


