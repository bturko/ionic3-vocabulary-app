import { Injectable } from '@angular/core';
import { IWord }      from '../interfaces/word.interface';
import { Http }       from '@angular/http';
//import {Subscription} from "rxjs";

@Injectable()
export class WordsService {
    http: Http;
    words: IWord[];

    constructor (http: Http) {
        this.http = http;
    }

    getFromCategory(catTitle: string, availLevel: number):Promise<IWord[]>{
        // TODO: refactor this
        if(!this.words){
            return new Promise(resolve => {
                this.http.get('/assets/data/words.json')
                    .map((res) => res.json())
                    .subscribe(data => {
                        this.words = data;
                        resolve(this.words.filter((w)=> w.category==catTitle && w.level<=availLevel));
                        }, (rej) => {console.error("Could not load local data",rej)});
            });
        }

    }

}