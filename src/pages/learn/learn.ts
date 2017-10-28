import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController }                     from 'ionic-angular';
import { Http }                                from '@angular/http';
import { UserService }                         from '../../shared/services/user.service';
import { IUser }                               from '../../shared/interfaces/user.interface';
import { MainPage }                            from "../main/main";

@IonicPage()
@Component({
  selector: 'page-learn',
  templateUrl: 'learn.html',
  providers: [UserService]
})
export class LearnPage {
  isAndroid: boolean = false;
  scripts = [];
  user: IUser;
  showGame: boolean = false;

  constructor(public alerCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              private userServ: UserService
) {
  }

  ionViewDidLoad() {
    this.user = this.userServ.getUser();
    this.getData();
  }

  getData(){
    this.http.get('/assets/data/scripts.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.scripts = data;
          //console.log(this.scripts)
        }, (rej) => {console.error("Could not load local data",rej)});
    this.nextScript();
  }

  testRadioOpen: boolean;
  testRadioResult;

  nextScript(){
    //console.log(this.user.scriptId)
    this.user.scriptId = this.userServ.setScriptId( ++this.user.scriptId );
    console.log(this.user.scriptId);
    switch (this.user.scriptId){
      case 1:
        this.doRadio();
        break;
      case 2:
        this.showGame1()
        break;
    }
  }

  showGame1() {
    this.showGame = true;
  }

  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Выберите свой уровень знания английского');

    alert.addInput({
      type: 'radio',
      label: 'Новичек',
      value: '0',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Знаю слабо',
      value: '1'
    });

    alert.addInput({
      type: 'radio',
      label: 'Знаю хорошо',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: 'Профи',
      value: '3'
    });

    alert.addButton({
      text: 'Отмена',
      handler: data => {
        this.navCtrl.push(MainPage, { })
        //console.log('Radio data:', data);
        //this.user.baseExperience = data;
        //console.log(data);
        //this.user.scriptId = this.userServ.setScriptId( this.user.scriptId++ );
      }
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        //console.log('Radio data:', data);
        this.user.baseExperience = data;
        //console.log(data);
        this.nextScript();
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


}
