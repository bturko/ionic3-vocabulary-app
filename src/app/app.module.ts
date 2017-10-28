import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyVocabularyApp }                          from './app.component';
import { BrowserModule }                            from '@angular/platform-browser';
//import { NavigationDetailsPage, BasicPage }       from './navigation/pages';
import { MainPage }                                 from '../pages/main/main';
import { VocabularyPage }                           from '../pages/vocabulary/vocabulary';
import { AppVocabularyPage }                        from '../pages/vocabulary/appvocabulary/appvocabulary';
import { MyVocabularyPage }                         from '../pages/vocabulary/myvocabulary/myvocabulary';
import { LearnPage }                                from '../pages/learn/learn';
import { HttpModule }                               from '@angular/http';
import { TagCategoriesComponent }                   from '../components/tag-categories/tag-categories';

@NgModule({
  declarations: [
    MyVocabularyApp,
    MainPage,
    VocabularyPage,
    AppVocabularyPage,
    MyVocabularyPage,
    LearnPage,
    TagCategoriesComponent
  ],
  imports: [
    IonicModule.forRoot(MyVocabularyApp),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyVocabularyApp,
    MainPage,
    VocabularyPage,
    AppVocabularyPage,
    MyVocabularyPage,
    LearnPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
