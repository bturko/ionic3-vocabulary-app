import { Component }        from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ModalController }  from 'ionic-angular';
import { ModalContentPage } from './add-word/add-word';
import { WordsService }     from '../../../shared/services/words.service';
import { UserService }      from '../../../shared/services/user.service';
import { StoreService }     from '../../../shared/services/store.service';
import { IWord }            from "../../../shared/interfaces/word.interface";

@IonicPage()
@Component({
  selector: 'page-myvocabulary',
  templateUrl: 'myvocabulary.html',
  providers: [ WordsService, StoreService, UserService ]
})
export class MyVocabularyPage {
  words: IWord[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalCtrl: ModalController,
      public wordsService: WordsService,
      public storeService: StoreService,
      public userService: UserService
  ) {
    this.getData();
    this.wordsService = wordsService;
    this.storeService = storeService;
    this.userService = userService;
  }

  ionViewDidLoad() {
    this.storeService.loadUserData();
    //console.log('ionViewDidLoad MyvocabularyPage');
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.onDidDismiss(word => {
      if(word.text){
        this.wordsService.addCustomWord(word);
        this.storeService.saveUserData(this.userService.user);
        this.words.push(word)
      }
    });
    modal.present();
  }

  getData(){
    this.wordsService.initWords().then(
        () => this.words = this.wordsService.getCustomVocabulary()
    )
  }


}



