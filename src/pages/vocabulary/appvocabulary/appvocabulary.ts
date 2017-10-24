import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Injectable}                            from '@angular/core';
import { Http }                                from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the VocabularyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-vocabulary',
  templateUrl: 'appvocabulary.html',
})

@Injectable()
export class AppVocabularyPage {
  words;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularyPage');

    //this.words = this.http.get('build/json/skills.json').map(res => res.json());
    this.getData();
  }

  getData(){
    this.http.get('assets/data/words.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.words = data;
          console.log(this.words)
        }, (rej) => {console.error("Could not load local data",rej)});
  }

}
