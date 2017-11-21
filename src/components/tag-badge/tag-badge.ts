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
  //wordsService: WordsService;
  currWords: IWord[];

  constructor(private wordsService: WordsService) {
    this.wordsService = wordsService;
    this.wordsService.initWords().then(
        ()=> this.currWords = this.wordsService.getFromCategory("Животные", 4)
    )
  }

  start(){
    this.onChanged.emit(true);

  }

}
