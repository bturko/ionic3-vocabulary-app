import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController }                     from 'ionic-angular';
import { Http }                                from '@angular/http';
import { UserService }                         from './user.service';
import { IUser }                               from './user.types';

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

  constructor(public alerCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              private userServ: UserService
) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LearnPage');
    this.getData();
  }
  getData(){
    this.user = this.userServ.getUser();

    this.http.get('/assets/data/scripts.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.scripts = data;
          console.log(this.scripts)
        }, (rej) => {console.error("Could not load local data",rej)});

    switch (this.user.scriptId){
      case 0:
          this.doRadio();
        break;
      case 1:
        alert("(script==1)")
        break;
    }


  }

  testRadioOpen: boolean;
  testRadioResult;

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

    alert.addButton('Отмена');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.user.baseExperience = data;
        console.log(data);
        this.user.scriptId = this.userServ.setScriptId( this.user.scriptId++ );
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


}
