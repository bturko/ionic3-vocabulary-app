import { Injectable } from '@angular/core';
import { IUser }      from '../interfaces/user.interface'
import { User }       from '../types/user.type'

@Injectable()
export class UserService {
    _user: IUser;

    constructor(){
        this._user = new User();
        /* TODO: all below will be getting from storage: */
        this._user.wordsLevel = 1;
        this._user.scriptId = 0;
        this._user.baseExperience = 1;
        this._user.availableCategories = [1]
    }


    public get user(): IUser {
        return this._user;
    }

    public set user(user: IUser) {
        this._user = user;
    }

}