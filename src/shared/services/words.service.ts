import { Injectable }  from '@angular/core';
import { IWord }       from '../interfaces/word.interface';
import { Http }        from '@angular/http';

@Injectable()
export class WordsService {
    http: Http;
    words: IWord[];

    constructor (http: Http) {
        this.http = http;
    }

    getWord(id: number):Promise<IWord>{
        return new Promise(resolve => {
            this.http.get('/assets/data/words.json')
                .map((res) => res.json())
                .subscribe(data => {
                    this.words = data;
                    resolve(this.words.filter((w)=> w.text == "butterfly"));
                }, (rej) => {console.error("Could not load local data",rej)});
        });
    }

    /**
     *
     * @param catTitle
     * @param availLevel
     * @returns {Promise<T>}
     */
    getFromCategory(catTitle: string, availLevel: number):Promise<IWord[]>{
        // TODO: refactor this
        if(!this.words){
            return new Promise(resolve => {
                this.http.get('/assets/data/words.json')
                    .map((res) => res.json())
                    .subscribe(data => {
                        this.words = data;
                        resolve(this.words.filter((w)=> w.category == catTitle && w.level<=availLevel));
                        }, (rej) => {console.error("Could not load local data",rej)});
            });
        }

    }

    /**
     * Returns words array
     * @param catTitle
     * @param availLevel
     * @param count
     * @returns {Promise<T>}
     */
    getRandomWordsArray(catTitle: string, availLevel: number, count: number, exceptions: number[]):Promise<IWord[]>{
        return new Promise(resolve => {
            this.http.get('/assets/data/words.json')
                .map((res) => res.json())
                .subscribe(data => {
                    let words: IWord[] = [];
                    let categoryWords = data.filter((w)=> w.category==catTitle && w.level<=availLevel);
                    for (var j=0; j < count; j++) {
                       let k = Math.round( Math.random() * (categoryWords.length - 0) + 0);
                       if (exceptions.indexOf(k)) k++;
                       words.push(data[k]);
                   };

                    this.words = data;
                    resolve(words);
                }, (rej) => {console.error("Could not load local data",rej)});
        });
    }

}