import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VocabularyPage }           from '../vocabulary/vocabulary';
import { LearnPage }                from '../learn/learn';
import { InAppBrowser,
         InAppBrowserOptions }      from '@ionic-native/in-app-browser';
import { SettingsService }          from "../../shared/services/settings.service";
import { SplashScreen }             from '@ionic-native/splash-screen';


@Component({
  selector: 'page-posts',
  templateUrl: 'main.html',
  providers: [ SplashScreen ]
})
export class MainPage {

  loadCompleted: boolean = false;
  subreddit;
  menuItems = [];
  browser;
  options : InAppBrowserOptions = {
    location : 'yes',
    hidden : 'no',
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };
  image;
  fullAppUrl: string = "http://google.com/";

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private theInAppBrowser: InAppBrowser,
      settingsService: SettingsService,
      private splashScreen: SplashScreen
  ) {
    this.splashScreen.show();
    setTimeout(()=>this.splashScreen.hide(), 2000)
    this.image = 'https://randomuser.me/api/portraits/women/79.jpg';
    settingsService.getPlatform();
    this.menuItems = [
      {
        'title': 'Учить',
        'icon': 'pie',
        'description': '',
        'color': '#0CA9EA'
      },
      {
        'title': 'Словарь',
        'icon': 'school',
        'description': 'l',
        'color': '#E63135'
      },
      {
        'title': 'Статистика',
        'icon': 'stats',
        'description': '',
        'color': '#ea6d1e'
      },
      {
        'title': 'Полная версия',
        'icon': 'cloud',
        'description': '',
        'color': '#ea6d1e'
      }
    ]
 }

  getPostImage(post) {
   }

  setImageError(post) {
  }


  goToPost(post) {
  }

  goToSubreddit(subreddit) {
  //  this.navCtrl.push(MainPage, {subreddit})
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
        this.openWithInAppBrowser(this.fullAppUrl);
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
