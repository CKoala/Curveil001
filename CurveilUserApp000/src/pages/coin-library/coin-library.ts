import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-coin-library',
  templateUrl: 'coin-library.html',
})
export class CoinLibrary {

  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoinLibrary');
  }

}
