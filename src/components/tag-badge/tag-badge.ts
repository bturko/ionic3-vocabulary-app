import { Component, Output, EventEmitter } from '@angular/core';
import { IWord }                           from "../../shared/interfaces/word.interface";
import { WordsService }                    from '../../shared/services/words.service';

@Component({
  selector: 'tag-badge',
  templateUrl: 'tag-badge.html',
  providers: [WordsService]
})
export class TagBadgeComponent {
  @Output() onChanged = new EventEmitter<boolean>();

  currWords: IWord[];

  constructor(private wordsService: WordsService) {
    this.wordsService.getFromCategory("Животные").then(data => {
       this.currWords = data;
    });
  }

  start(){
    //this.showGame = true;
    this.onChanged.emit(true);
  }

}
