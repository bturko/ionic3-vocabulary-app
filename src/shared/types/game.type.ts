import { IQuestionEntity } from './question.type'

export class Game {
    private _questions: IQuestionEntity[];
    private _rightAnswerCount: number;
    private _askedCount: number;
    private _seconds: number;
    private _currentCategory: string;

    /**
     * Default constructor
     */
    public constructor(){

    }

    public get questions(): IQuestionEntity[] {
        return this._questions;
    }

    public set questions(questions: IQuestionEntity[]) {
        this._questions = questions;
    }

    public get rightAnswerCount(): number {
        return this._rightAnswerCount;
    }

    public set rightAnswerCount(rightAnswerCount: number) {
        this._rightAnswerCount = rightAnswerCount;
    }

    public get askedCount(): number {
        return this._askedCount;
    }

    public set askedCount(askedCount: number) {
        this._askedCount = askedCount;
    }

    public get seconds(): number {
        return this._seconds;
    }

    public set seconds(seconds: number) {
        this._seconds = seconds;
    }

    public get currentCategory(): string {
        return this._currentCategory;
    }

    public set currentCategory(currentCategory: string) {
        this._currentCategory = currentCategory;
    }

}
