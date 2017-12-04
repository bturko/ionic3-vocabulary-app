import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  showGame: boolean = false;
  categoryId: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categoryId = this.navParams.get('val');
  }

  ionViewDidLoad() {

  }

  onChanged(val: boolean){
    this.showGame = val;
  }

}
