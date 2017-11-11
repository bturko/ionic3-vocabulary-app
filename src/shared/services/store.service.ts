import { Injectable }  from '@angular/core';
import { IStore }      from "../interfaces/store.interface";
import { UserService } from './user.service'

@Injectable()
export class StoreService {
    userService;

    constructor (userService: UserService) {
        this.userService = userService;
    }

    loadUserData(): IStore {
        let user = this.userService.getUser();
        let store = {
            user: user,
            userVocabulary: []
        }

        return store;
    }

    saveUserData(): void {
        let user = this.userService.getUser();

    }
}