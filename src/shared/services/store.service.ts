import { Injectable }      from '@angular/core';
import { SettingsService } from './settings.service'
import { NativeStorage }   from '@ionic-native/native-storage';
import { Toast }           from '@ionic-native/toast';
import { Platform }        from 'ionic-angular';
import { IUser }           from "../interfaces/user.interface";
import { Platforms }       from "../enums/platforms.enum";


@Injectable()
export class StoreService {
    platformName: string;
    user: IUser;

    constructor (
        private settingsService: SettingsService,
        private nativeStorage: NativeStorage,
        private platform: Platform,
        private toast: Toast
    ) {
        this.settingsService = settingsService;
        this.platform = platform;
    }

    initStore(): void{
        this.platform.ready().then((source) => {
            this.platformName = source;
        });
    }

    loadUserData(): Promise<IUser> {
        if(this.platformName == Platforms.Web){
            return new Promise((resolve)=>resolve(localStorage.getItem("user")))
        }
        else{
            this.nativeStorage.getItem('user')
                .then(
                    store => {
                        this.settingsService.showMessage("Stored loaded!")
                        console.log('Stored loaded!', store)
                        this.toast.show(`Stored loaded!`, '5000', 'center').subscribe(toast => {});
                        return store;
                    },
                    error => {
                        this.settingsService.showError("Can't get stored data!")
                        // console.log("Can't get stored data!")
                        // this.toast.show(`Can't get stored data!`, '5000', 'center').subscribe(toast => {});
                    }
                );
        }
        //return store; //TODO: not good!
    }

    saveUserData(user: IUser) {
        if (!this.platform.is('android')) {
            localStorage.setItem("user", JSON.stringify(user));
        }
        else{
            this.nativeStorage.setItem('user', {
                wordsLevel: user.wordsLevel,
                scriptId: user.scriptId,
                baseExperience: user.baseExperience,
                availableCategories: user.availableCategories,
                customWords: user.customWords
            })
            .then(() => {
                this.settingsService.showMessage("Stored item!");
                this.toast.show(`Stored item!`, '5000', 'center').subscribe(toast => {});
            },
            error => {
                this.settingsService.showError("Error while storing data!");
                this.toast.show(`Error while storing data!`, '5000', 'center').subscribe(toast => {});
            });
        }
    }

}