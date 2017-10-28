import { Component } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';

@Component({
  selector: 'tag-categories',
  templateUrl: 'tag-categories.html'
})
export class TagCategoriesComponent {

  text: string;
  categories: ICategory[];

  constructor() {
    this.text = 'Доступные категории';
    this.categories = [{
      name: "животные",
      imgPath: "animals.png"
    },{
      name: "Кухня",
      imgPath: "kitchen.jpg"
    },{
      name: "Цвета",
      imgPath: "colors.jpg"
    }]
  }

}
