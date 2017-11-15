export interface IWord {
    text: string,
    translation: string,
    transcription: string,
    lang: string,
    level: number,
    transLang: string,
    category: string,
    status: string // "enabled"-user learnt it
}