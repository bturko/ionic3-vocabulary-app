import { Component, Output, EventEmitter } from '@angular/core';
import { NavParams, ViewController }       from 'ionic-angular';
import { IWord }                           from "../../../../shared/interfaces/word.interface";
import { WordsStatus }                     from "../../../../shared/enums/wordstatuses.enum";

@Component({
    templateUrl: "/add-word.html"
})

export class ModalContentPage {
    @Output() wordAdding = new EventEmitter();
    word: IWord;
     text: string;
     translation: string;

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController
    ) { }

    add_word(){
        this.word = {
            id: 0,
            text: this.text,
            translation: this.translation,
            transcription: "",
            lang: "en",
            level: 1,
            transLang: "ru",
            category: "Custom",
            status: WordsStatus.Enabled
        }
        //this.wordAdding.emit(word);
        this.viewCtrl.dismiss(this.word);
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}