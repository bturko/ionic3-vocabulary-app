import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController }                     from 'ionic-angular';
import { VocabularyPage }                      from "../vocabulary/vocabulary";
import { MyVocabularyPage }                    from "../myvocabulary/myvocabulary";

/**
 * Generated class for the LearnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
})
export class LearnPage {
  isAndroid: boolean = false;
  tab1Root = VocabularyPage;
  tab2Root = MyVocabularyPage;

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearnPage');
  }

  testRadioOpen: boolean;
  testRadioResult;

  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Новичек',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Знаю слабо',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Знаю хорошо',
      value: 'black'
    });

    alert.addInput({
      type: 'radio',
      label: 'Профи',
      value: 'black'
    });

    alert.addButton('Отмена');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


}
