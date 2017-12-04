import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable }                          from '@angular/core';
import { WordsService }                        from '../../../shared/services/words.service'
import { IWord }                               from '../../../shared/interfaces/word.interface'

@IonicPage()
@Component({
  selector: 'page-app-vocabulary',
  templateUrl: 'appvocabulary.html',
  providers: [WordsService]
})

@Injectable()
export class AppVocabularyPage {
  words: IWord[]; // all words
  wordsEdt: IWord[]; // filtered words
  searchFilter = "";

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public wordsService: WordsService
  ) {
  }

  ionViewDidLoad() {
    this.getData();
  }

  getData(){
     this.wordsService.getVocabulary().then((words)=>{
       this.words = words;
       this.wordsEdt = this.words;
     })
  }

  search(val: any) {
    if (!val) this.wordsEdt = this.words;

    this.wordsEdt = this.words.filter(w => w.text.indexOf(val) >= 0);
  }

}
