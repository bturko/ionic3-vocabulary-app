import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VocabularyPage } from './vocabulary';

@NgModule({
  declarations: [
    VocabularyPage,
  ],
  imports: [
    IonicPageModule.forChild(VocabularyPage),
  ],
})
export class VocabularyPageModule {}
