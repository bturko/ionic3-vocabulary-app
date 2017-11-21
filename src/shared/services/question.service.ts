import { Injectable } from '@angular/core';
import { IQuestion }  from '../interfaces/question.interface';
import { WordsService } from '../services/words.service'

@Injectable()
export class QuestionService {
    wordsService: WordsService;

    constructor(wordsService: WordsService){
        this.wordsService = wordsService;
    }

    getQuestion(category: string, availLevel: number, count: number, exceptions: number[]): IQuestion{

        let question: IQuestion = {
            rightAnswer: Math.round(Math.random() * (count - 0) + 0),
            words: this.wordsService.getRandomWordsByCategory(category, availLevel, count, exceptions)
        }
        return question;
        // this.wordsService.getRandomWordsArray(category, availLevel, count, exceptions).then(
        //     (words)=>{
        //         let question: IQuestion = {
        //             rightAnswer: Math.round(Math.random() * (count - 0) + 0),
        //             words: words
        //         };
        //         return new Promise(resolve => resolve(question));
        //     }
        // )
    }

}