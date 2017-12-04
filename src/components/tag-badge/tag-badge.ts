import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IWord }                                  from "../../shared/interfaces/word.interface";
import { WordsService }                           from '../../shared/services/words.service';
import { HttpCategoriesService }                  from '../../shared/services/categories.http.service'

@Component({
  selector: 'tag-badge',
  templateUrl: 'tag-badge.html',
  providers: [WordsService]
})
export class TagBadgeComponent {
  @Output() onChanged = new EventEmitter<boolean>();
  @Input() catId: number;
  currWords: IWord[];
  catName: string;
  imgPath: string;

  constructor(private wordsService: WordsService, private httpCategoriesService: HttpCategoriesService) {
    this.wordsService = wordsService;
    this.httpCategoriesService = httpCategoriesService;

    //this.catId = catId;
    //alert("cat"+catId)
    this.httpCategoriesService.loadCategories().then((categories)=>{
      console.log(categories, this.catId)
      this.catName = categories[this.catId].name;
      this.imgPath = categories[this.catId].imgPath;
      this.wordsService.initWords().then(
          ()=> this.currWords = this.wordsService.getFromCategory(this.catName, 4) // 4=user.availableLevel
      )
    })
  }

  ionViewDidLoad() {

  }

  start(){
    this.onChanged.emit(true);

  }

}
