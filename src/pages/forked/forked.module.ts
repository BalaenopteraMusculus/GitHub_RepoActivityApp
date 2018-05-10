import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForkedPage } from './forked';

@NgModule({
  declarations: [
    ForkedPage,
  ],
  imports: [
    IonicPageModule.forChild(ForkedPage),
  ],
})
export class ForkedPageModule {}
