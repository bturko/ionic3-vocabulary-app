import { Injectable }      from '@angular/core';
import { IStore }          from "../interfaces/store.interface";
import { SettingsService } from './settings.service'
import { NativeStorage }   from '@ionic-native/native-storage';
import { Toast }           from '@ionic-native/toast';
import { Platform }        from 'ionic-angular';
import { IUser }           from "../interfaces/user.interface";

@Injectable()
export class StoreService {
    platformName: string;

    constructor (
        private settingsService: SettingsService,
        private nativeStorage: NativeStorage,
        private platform: Platform
    ) {
        this.settingsService = settingsService;
        platform.ready().then((source) => {
            this.platformName = source;
        });
    }

    loadUserData(): void {
        //let user = this.userService.user;
        // let store = {
        //      user: {},
        //      userVocabulary: []
        //  }

        this.nativeStorage.getItem('user')
            .then(
                store => {
                    this.settingsService.showMessage("Stored loaded!")
                    // console.log('Stored loaded!', store)
                    // this.toast.show(`Stored loaded!`, '5000', 'center').subscribe(toast => {});
                    return store;
                },
                error => {
                    this.settingsService.showError("Can't get stored data!")
                    // console.log("Can't get stored data!")
                    // this.toast.show(`Can't get stored data!`, '5000', 'center').subscribe(toast => {});
                }
            );
        //return store; //TODO: not good!

    }

    saveUserData(user: IUser): void {
        //let user: IUser = this.userService.user;

        if (this.platform.is('android')) {

        }

        this.nativeStorage.setItem('user', {
            wordsLevel: user.wordsLevel,
            scriptId: user.scriptId,
            baseExperience: user.baseExperience,
            availableCategories: user.availableCategories,
            customWords: user.customWords
        })
            .then(
                () => {
                    this.settingsService.showMessage("Stored item!")
                    // console.log('Stored item!');
                    // this.toast.show(`Stored item!`, '5000', 'center').subscribe(toast => {});
                },
                error => {
                    this.settingsService.showError("Error while storing data!");
                    // console.error('Error while storing data', error);
                    // this.toast.show(`Error while storing data!`, '5000', 'center').subscribe(toast => {});
                }
            );

    }
}