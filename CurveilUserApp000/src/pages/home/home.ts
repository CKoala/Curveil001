  import { Component } from '@angular/core';
  import { NavController } from 'ionic-angular';

  import { AngularFireAuth } from 'angularfire2/auth';
  import { AngularFireDatabase/*, AngularFireObject, AngularFireList*/ } from 'angularfire2/database';
  import * as firebase from 'firebase/app';

  import { Observable } from 'rxjs/Observable';

  @Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })
  export class HomePage {

  user: Observable<firebase.User>
  displayName;
  email;
  user_id;
  items:Observable<any[]>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase, afAuth: AngularFireAuth) {
    this.items = db.list('items').valueChanges();
    this.user = afAuth.authState;

  afAuth.authState.subscribe(user => {
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
    
    }
    
    
    }
