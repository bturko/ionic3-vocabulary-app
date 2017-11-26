import { Component }        from '@angular/core';
import { IonicPage,
         NavController,
         NavParams,
         ModalController }  from 'ionic-angular';
import { ModalContentPage } from './add-word/add-word';
import { WordsService }     from '../../../shared/services/words.service';
import { UserService }      from '../../../shared/services/user.service';
//import { User }             from  '../../../shared/types/user.type'
import { StoreService }     from '../../../shared/services/store.service';
import { IWord }            from "../../../shared/interfaces/word.interface";
//import {share} from "rxjs/operator/share";

@IonicPage()
@Component({
  selector: 'page-myvocabulary',
  templateUrl: 'myvocabulary.html',
  //providers: [  ]
})
export class MyVocabularyPage {
  words: IWord[];
  user: IUser;

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
    //this.user = new User();
    this.user = this.userService.user;
    console.log('this.user', this.user)
    //localStorage.setItem("user", {wordsLevel: 78})
  }

  ionViewDidLoad() {

      //  console.log(this.user.wordsLevel)
    //console.log('ionViewDidLoad MyvocabularyPage');
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.onDidDismiss(word => {
      if(word.text){

        let cw: IWord[] = this.user.customWords;
        console.log('A',this.user,cw)

        cw.push(word);
        this.user.customWords = cw;
        console.log('B',this.user)

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



