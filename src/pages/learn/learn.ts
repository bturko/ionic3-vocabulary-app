import { Component }                           from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController }                     from 'ionic-angular';
import { Http }                                from '@angular/http';
import { UserService }                         from '../../shared/services/user.service';
import { IUser }                               from '../../shared/interfaces/user.interface';
import { MainPage }                            from "../main/main";
import { NativeStorage }                       from '@ionic-native/native-storage';
import { Toast }                               from '@ionic-native/toast';

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
  DataArray: Array<string> = [];

  constructor(public alerCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http,
              private userService: UserService,
              private nativeStorage: NativeStorage,
              private toast: Toast
) {
  }

  ionViewDidLoad() {
    this.user = this.userService.getUser();
    this.getData();
  }

  getData(){
    this.http.get('/assets/data/scripts.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.scripts = data;
        }, (rej) => {console.error("Could not load local data",rej)});
    this.nextScript();
  }

  testRadioOpen: boolean;
  testRadioResult;

  nextScript(){
    this.user.scriptId = this.userService.setScriptId( ++this.user.scriptId );

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
        //this.user.baseExperience = data;
        //this.user.scriptId = this.userServ.setScriptId( this.user.scriptId++ );
      }
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.userService.setBaseExperience(data);
        this.saveStorage();
        this.nextScript();
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  saveStorage(){
    this.toast.show(`Wait...`, '5000', 'center');
    this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
        .then(
            () => {
              console.log('Stored item!');
              //this.toast.show(`Stored item!`, '5000', 'center').subscribe(toast => {});
            },
            error => {
              console.error('Error storing item', error);
              //this.toast.show(`NOT Stored!`, '5000', 'center').subscribe(toast => {});
            }
        );

    this.nativeStorage.getItem('myitem')
        .then(
            data => {
              console.log('Stored item!', data)
              //this.toast.show(`Item! ${data.property}`, '5000', 'center').subscribe(toast => {});
            },
            error => {
                console.log("Can't get item!")
                //this.toast.show(`Can't get item!`, '5000', 'center').subscribe(toast => {});
            }
        );
  }

}
