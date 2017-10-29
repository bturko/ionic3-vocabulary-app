import { Injectable } from '@angular/core';
import { IWord }      from '../interfaces/word.interface';
import { Http }       from '@angular/http';
import {Subscription} from "rxjs";

@Injectable()
export class WordsService {
    http: Http;
    words: IWord[];

    constructor (http: Http) {
        this.http = http;
    }

    getFromCategory(catTitle: string):Promise<IWord[]>{
        // TODO: refactor this
        if(!this.words){
            // don't have the data yet
            return new Promise(resolve => {
                this.http.get('/assets/data/categories.json')
                    .map((res) => res.json())
                    .subscribe(data => {
                        this.words = data;
                        resolve(this.words);
                        //return this.words;//.filter((w)=> w.categoryTags.indexOf(catTitle) > -1)
                        //console.log( this.words )
                    }, (rej) => {console.error("Could not load local data",rej)});
            });
        }

    }

}