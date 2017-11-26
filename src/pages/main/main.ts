import { Component }                from '@angular/core';
import { NavController,
         NavParams,
         Platform }                 from 'ionic-angular';
import { VocabularyPage }           from '../vocabulary/vocabulary';
import { LearnPage }                from '../learn/learn';
import { InAppBrowser,
         InAppBrowserOptions }      from '@ionic-native/in-app-browser';
import { SplashScreen }             from '@ionic-native/splash-screen';
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
      private plt: Platform
  ) {
      this.user = localStorage.setItem("user", {}) //!!!!!!!!!!!!!!!!!
      this.plt.ready().then((source) => {
          this.storeService = storeService;
          this.userService = userService;
          this.menuItems = settingsService.menuItems();
          this.browser = settingsService.browserOptions;

          // splashscreen & load data
          if (source == Platforms.Android) {
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
              this.user = localStorage.getItem("user")
              if(!this.user.wordsLevel && !this.user.baseExperience) {
                  this.user = new User();
                  console.error("Getting local stored data error!", this.user);
              }
          }
          this.userService.user = this.user;
          console.log('uService', this.userService.user)
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
