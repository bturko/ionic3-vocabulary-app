import { IWord }    from "../../shared/interfaces/word.interface";

export interface IGame {
    question: string,
    answers: IWord[],
    rightAnswer: number
}