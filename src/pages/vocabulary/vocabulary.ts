import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVocabularyPage }                   from "./appvocabulary/appvocabulary";
import { MyVocabularyPage }                    from "./myvocabulary/myvocabulary";
/**
 * Generated class for the VocabularyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html',
})
export class VocabularyPage {
  tab1Root = AppVocabularyPage;
  tab2Root = MyVocabularyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyPage');
  }

}
