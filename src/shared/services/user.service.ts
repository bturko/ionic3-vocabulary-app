import {Injectable} from '@angular/core';
import { IUser } from '../interfaces/user.interface'

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
        console.log('setScriptId', this.user.scriptId, scriptId)
        this.user.scriptId = scriptId;
        console.log('setScriptId', this.user.scriptId)
        return this.user.scriptId;
    }
}