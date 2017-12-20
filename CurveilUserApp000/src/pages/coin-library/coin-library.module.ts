import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoinLibrary } from './coin-library';

@NgModule({
  declarations: [
    CoinLibrary,
  ],
  imports: [
    IonicPageModule.forChild(CoinLibrary),
  ],
})
export class CoinLibraryModule {}
