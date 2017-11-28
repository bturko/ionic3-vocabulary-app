import { IWord } from './word.interface'

export interface IUser {
    wordsLevel: number,
    baseExperience: number,
    scriptId: number,
    availableCategories: number[],
    customWords: IWord[]
}