import { Injectable }       from '@angular/core';
import { IWord }            from '../interfaces/word.interface';
import { WordsStatus }      from '../enums/wordstatuses.enum';
import { HttpWordsService } from '../services/words.http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsService {
    words: IWord[];
    httpWordsService: HttpWordsService;

    constructor (httpWordsService: HttpWordsService) {
        this.httpWordsService = httpWordsService;
    }

    initWords():Promise<boolean>{
        return new Promise(resolve => {
            this.httpWordsService.loadWords().then(words => {
                this.words = words;
                resolve(true);
            }, (rej) => {console.error("Could not load local data",rej)});
        });
    }


    /**
    * Returns word by id
     * id: number
     */
    getWord(id: number):IWord{
        let word: any = this.words.filter((w)=> w.id == id);
        return word;
    }

    /**
     * Returns words by Category name
     * @param catTitle
     * @param availLevel
     * @returns {Promise<T>}
     */
    getFromCategory(catTitle: string, availLevel: number):IWord[]{
       return this.words.filter((w)=> w.category == catTitle && w.level <= availLevel);
    }

    getVocabulary():Promise<IWord[]>{
        // TODO: refactor this
        if(!this.words){
            return new Promise(resolve => {
                this.httpWordsService.loadWords().then(data => {
                        this.words = data;
                        resolve(this.words.filter((w)=> w.status == WordsStatus.Enabled));
                    }, (rej) => {console.error("Could not load local data",rej)});
            });
        }
    }

    getCustomVocabulary():IWord[]{
        console.log('getCustomVocabulary', this.words)
        return this.words.filter((w)=> w.category == "Custom");
    }

    /**
     * Returns words array by category
     * @param catTitle
     * @param availLevel
     * @param count
     * @returns {Promise<T>}
     */
    getRandomWordsByCategory(catTitle: string, availLevel: number, count: number, exceptions: number[]):IWord[]{

        if(!this.words) throw "Empty words service array!";
        let categoryWords = this.words.filter((w)=> w.category == catTitle && w.level <= availLevel);
        let words: IWord[] = [];
        for (var j=0; j < count; j++) {
            let k = Math.round( Math.random() * (categoryWords.length - 0) + 0);
            if (exceptions.indexOf(k)) k++;
            words.push(this.words[k]);
        };
        //console.log('getRandomWordsByCategory', categoryWords, words)

        return words;
    }

    addKnownWord(wordId: number){
        this.words[wordId].status = WordsStatus.Enabled;
    }

    addCustomWord(word: IWord){
        console.log('addWord', word)
        this.words.push(word);
    }

}