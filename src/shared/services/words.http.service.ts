import { Injectable }  from '@angular/core';
import { Http }        from '@angular/http';
import { IWord }       from '../interfaces/word.interface';

@Injectable()
export class HttpWordsService {
    http: Http;
    words: IWord[];

    constructor(http: Http) {
        this.http = http;
    }

    loadWords(): Promise<IWord[]> {
        let url_path = './assets/data/words.json';
        return new Promise(resolve => {
            this.http.get(url_path)
                .map((res) => res.json())
                .subscribe(data => {
                    this.words = data;
                    resolve(this.words);
                }, (rej) => {
                    console.error("Could not load local data", rej)
                });
        });
    }
}