import { Component }                from '@angular/core';
import { NavController,
         NavParams,
         Platform }                 from 'ionic-angular';
import { VocabularyPage }           from '../vocabulary/vocabulary';
import { LearnPage }                from '../learn/learn';
import { InAppBrowser,
         InAppBrowserOptions }      from '@ionic-native/in-app-browser';
import { NativeStorage }            from "@ionic-native/native-storage";
import { SplashScreen }             from '@ionic-native/splash-screen';
import { Toast }                    from '@ionic-native/toast'
import { SettingsService }          from "../../shared/services/settings.service";
import { StoreService }             from "../../shared/services/store.service";
import { UserService }              from "../../shared/services/user.service";
import { Platforms }                from "../../shared/enums/platforms.enum";
import { IUser }                    from "../../shared/interfaces/user.interface";
import { User }                     from "../../shared/types/user.type";


@Component({
  selector: 'page-posts',
  templateUrl: 'main.html',
  providers: [ SplashScreen ]
})
export class MainPage {
  browser;
  menuItems;
  platform: number;
  options : InAppBrowserOptions;
  user: IUser;
  image: string = '../assets/imgs/logo.png';

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private theInAppBrowser: InAppBrowser,
      private settingsService: SettingsService,
      private userService: UserService,
      private storeService: StoreService,
      private splashScreen: SplashScreen,
      private nativeStorage: NativeStorage,
      private plt: Platform,
      private toast: Toast
  ) {
      this.storeService = storeService;
      this.userService = userService;
      this.nativeStorage = nativeStorage;
      this.toast = toast;
      //localStorage.setItem("user", JSON.stringify(new User()) );
      this.plt.ready().then((source: string) => {
          this.menuItems = settingsService.menuItems();
          this.browser = settingsService.browserOptions;

          // splashscreen & load data
          //alert(source)
          if (source == Platforms.Android || source == Platforms.Cordova) {
              //this.settingsService.getPlatform();
              this.splashScreen.show();
              setTimeout(() => this.splashScreen.hide(), 2000);
              this.nativeStorage.getItem('user')
                  .then(store => {
                      this.settingsService.showMessage("Stored loaded!")
                      console.log('Stored loaded!', store)
                      this.user = store;
                      this.toast.show(`Stored loaded!`, '5000', 'center').subscribe(toast => {});
                      return store;
                  }, error => {
                      this.settingsService.showError("Can't get stored data!")
                      console.log("Can't get stored data!")
                      this.toast.show(`Can't get stored data!`, '5000', 'center').subscribe(toast => {});
                  }
              );
          }
          else{
              this.user = JSON.parse(localStorage.getItem("user"));
              if(!this.user) {
                  this.user = new User();
                  console.error("Getting local stored data error!", this.user);
              }
          }
          console.log('user', this.user);
          this.userService.user = this.user;
          this.storeService.saveUserData(this.user);
          console.log('uService', this.userService.user);
      });

 }

  openNavDetailsPage(item) {
    switch (item.icon){
      case "pie":
        this.navCtrl.push(LearnPage, { val: item.icon })
        break;
      case "school":
        this.navCtrl.push(VocabularyPage, { val: item.icon })
        break;
      case "stats":
        this.navCtrl.push(VocabularyPage, { val: item.icon })
        break;
      case "cloud":
        this.openWithInAppBrowser(this.settingsService.fullAppUrl());
        break;
    }

  }

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
  }

}
