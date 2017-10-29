import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyVocabularyApp }                          from './app.component';
import { BrowserModule }                            from '@angular/platform-browser';
import { HttpModule }                               from '@angular/http';
/* pages */
import { MainPage }                                 from '../pages/main/main';
import { VocabularyPage }                           from '../pages/vocabulary/vocabulary';
import { AppVocabularyPage }                        from '../pages/vocabulary/appvocabulary/appvocabulary';
import { MyVocabularyPage }                         from '../pages/vocabulary/myvocabulary/myvocabulary';
import { LearnPage }                                from '../pages/learn/learn';
import { GamePage }                                 from '../pages/learn/game/game';
/* cpmponents */
import { TagCategoriesComponent }                   from '../components/tag-categories/tag-categories';
import { BadgeComponent }                           from '../components/badge/badge';
/* pipes */
import { MyFilterPipe }                             from '../components/tag-categories/cat.pipe';


@NgModule({
  declarations: [
    MyVocabularyApp,
    MainPage,
    VocabularyPage,
    AppVocabularyPage,
    MyVocabularyPage,
    LearnPage,
    GamePage,
    TagCategoriesComponent,
    BadgeComponent,
    MyFilterPipe
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
    LearnPage,
    GamePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
