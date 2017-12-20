import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCoins } from './my-coins';

@NgModule({
  declarations: [
    MyCoins,
  ],
  imports: [
    IonicPageModule.forChild(MyCoins),
  ],
})
export class MyCoinsModule {}
