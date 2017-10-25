import {Injectable} from '@angular/core';
import { IUser } from './user.types'

@Injectable()
export class UserService {
    user = {
        wordsLevel: 0,
        scriptId: 0,
        baseExperience: 0
    };

    getUser(): IUser {
        return this.user;
    }

    setScriptId(scriptId): number {
        this.user.scriptId = scriptId;
        return this.user.scriptId;
    }
}