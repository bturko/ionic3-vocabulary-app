import { Injectable } from '@angular/core';
import { IUser }      from '../interfaces/user.interface'

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

    setScriptId(scriptId:number): number {
        this.user.scriptId = scriptId;
        return this.user.scriptId;
    }

    setBaseExperience(expLevel: number): void{
        console.log('set', expLevel)
        this.user.baseExperience = expLevel;
    }
}