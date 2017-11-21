import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyVocabularyApp }                          from './app.component';
import { BrowserModule }                            from '@angular/platform-browser';
import { HttpModule }                               from '@angular/http';
/* pages */
import { MainPage }                                 from '../pages/main/main';
import { VocabularyPage }                           from '../pages/vocabulary/vocabulary';
import { AppVocabularyPage }                        from '../pages/vocabulary/appvocabulary/appvocabulary';
import { MyVocabularyPage  }                        from '../pages/vocabulary/myvocabulary/myvocabulary';
import { ModalContentPage }                         from '../pages/vocabulary/myvocabulary/add-word/add-word';
import { LearnPage }                                from '../pages/learn/learn';
import { GamePage }                                 from '../pages/learn/game/game';
/* components */
import { TagCategoriesComponent }                   from '../components/tag-categories/tag-categories';
import { TagBadgeComponent }                        from '../components/tag-badge/tag-badge';
import { TagGame1Component }                        from '../components/tag-game1/tag-game1';
/* pipes */
import { MyFilterPipe }                             from '../components/tag-categories/cat.pipe';

import { InAppBrowser }                             from '@ionic-native/in-app-browser';
import { NativeStorage }                            from '@ionic-native/native-storage';
import { Toast }                                    from '@ionic-native/toast';

/* services */
import { SettingsService }                          from '../shared/services/settings.service';
import { CategoriesService }                        from '../shared/services/categories.service';

/* data services */
import { HttpCategoriesService }                    from '../shared/services/categories.http.service';
import { HttpWordsService }                         from '../shared/services/words.http.service';

@NgModule({
  declarations: [
    MyVocabularyApp,
    MainPage,
    VocabularyPage,
    AppVocabularyPage,
    MyVocabularyPage,
    ModalContentPage,
    LearnPage,
    GamePage,
    TagCategoriesComponent,
    TagBadgeComponent,
    TagGame1Component,
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
    ModalContentPage,
    LearnPage,
    GamePage,
    ModalContentPage
  ],
  providers: [
    InAppBrowser,
    NativeStorage,
    Toast,
    SettingsService,
    CategoriesService,
    HttpCategoriesService,
    HttpWordsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
