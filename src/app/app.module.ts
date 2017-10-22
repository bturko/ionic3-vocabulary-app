import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { MomentModule } from 'angular2-moment';
import { MyVocabularyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
//import { NavigationDetailsPage, BasicPage } from './navigation/pages';
import { MainPage } from '../pages/main/main';
//import { CommentsPage } from '../pages/comments/comments';
//import { CommentsList } from '../pages/comments/commentsList/commentsList';
//import { CuppaDataGridModule } from 'cuppa-ng2-grid/cuppa-ng2-dataGrid';

@NgModule({
  declarations: [
    MyVocabularyApp,
    MainPage/*,
    CommentsPage,
    CommentsList*/
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
    MainPage/*,
    CommentsPage*/
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
