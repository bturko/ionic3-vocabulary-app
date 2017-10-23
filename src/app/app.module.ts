import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { MomentModule }                          from 'angular2-moment';
import { MyVocabularyApp }                          from './app.component';
import { BrowserModule }                            from '@angular/platform-browser';
//import { NavigationDetailsPage, BasicPage }       from './navigation/pages';
import { MainPage }                                 from '../pages/main/main';
import { VocabularyPage }                           from '../pages/vocabulary/vocabulary';
import { MyVocabularyPage }                         from '../pages/myvocabulary/myvocabulary';
import { LearnPage }                                from '../pages/learn/learn';


@NgModule({
  declarations: [
    MyVocabularyApp,
    MainPage,
    VocabularyPage,
    MyVocabularyPage,
    LearnPage
  ],
  imports: [
    IonicModule.forRoot(MyVocabularyApp),
    BrowserModule,/*,
    CuppaDataGridModule, // Import DataGrid module variable here/*,
    NavigationDetailsPage,
    BasicPage*//*,
    MomentModule*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyVocabularyApp,
    MainPage,
    VocabularyPage,
    MyVocabularyPage,
    LearnPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
