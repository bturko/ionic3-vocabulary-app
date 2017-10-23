import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyvocabularyPage } from './myvocabulary';

@NgModule({
  declarations: [
    MyvocabularyPage,
  ],
  imports: [
    IonicPageModule.forChild(MyvocabularyPage),
  ],
})
export class MyvocabularyPageModule {}
