import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGitHubPage } from './my-git-hub';

@NgModule({
  declarations: [
    MyGitHubPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGitHubPage),
  ],
})
export class MyGitHubPageModule {}
