import { NgModule }         from '@angular/core';
import { IonicPageModule }  from 'ionic-angular';
import { MyVocabularyPage } from './myvocabulary';
import { ModalContentPage } from './add-word/add-word'


@NgModule({
  declarations: [
    MyVocabularyPage,
    ModalContentPage
  ],
  imports: [
    IonicPageModule.forChild(MyVocabularyPage),
    IonicPageModule.forChild(ModalContentPage),
  ],
})
export class MyvocabularyPageModule {}
