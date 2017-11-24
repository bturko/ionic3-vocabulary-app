import { Injectable }  from '@angular/core';
import { Platform }    from 'ionic-angular';
import { Http }        from '@angular/http';
import { Toast }       from '@ionic-native/toast'

@Injectable()
export class SettingsService {
    platformName: string;
    http: Http;
    scripts: any[];

    constructor(private plt: Platform,
                http: Http,
                private toast: Toast)
    {
        this.http = http;
    }

    getPlatform(){
        this.plt.ready().then((source) => this.platformName = source);
    }

    /**
     * returns if platform is Android
     */
    isAndroid(): boolean {
       return this.platformName == 'android' || this.platformName == 'cordova';
    }

    getScripts():Promise<any[]> {

        if(this.scripts){
            return new Promise(resolve => resolve(this.scripts));
        }
        let url_path = (!this.isAndroid() ? './assets/data/scripts.json' : './assets/data/scripts.json' )
        return new Promise(resolve => {
            this.http.get(url_path)
                .map((res) => res.json())
                .subscribe(scripts => {
                    this.scripts = scripts;
                    resolve(this.scripts);
                }, (rej) => {
                    this.showError("Could not load local data", rej);
            });
        });
       // });
    }

    showMessage(msg: string, rej?){
        if (this.isAndroid()) {
            this.toast.show(msg, '5000', 'center').subscribe(toast => {});
        }
        else{
            console.info(msg, rej)
        }
    }

    showError(msg: string, rej?){
        if (this.isAndroid()) {
            this.toast.show(msg, '5000', 'center').subscribe(toast => {});
        }
        else{
            console.info("ERROR: " + msg, rej)
        }
    }

    menuItems(): any{
        return [
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

    browserOptions(): any {
        return {
            location: 'yes',
            hidden : 'no',
            clearcache : 'yes',
            clearsessioncache : 'yes',
            zoom : 'yes', //Android only ,shows browser zoom controls
            hardwareback : 'yes',
            mediaPlaybackRequiresUserAction : 'no',
            shouldPauseOnSuspend : 'no', //Android only
            closebuttoncaption : 'Close', //iOS only
            disallowoverscroll : 'no', //iOS only
            toolbar : 'yes', //iOS only
            enableViewportScale : 'no', //iOS only
            allowInlineMediaPlayback : 'no', //iOS only
            presentationstyle : 'pagesheet', //iOS only
            fullscreen : 'yes' //Windows only
        }
    }



fullAppPath(): string{
        return  "http://google.com/";
    }

}