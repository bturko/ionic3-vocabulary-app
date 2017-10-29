import { Component } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';
import { GamePage } from '../../pages/learn/game/game';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'tag-categories',
  templateUrl: 'tag-categories.html'
})
export class TagCategoriesComponent {

  text: string;
  categories: ICategory[];

  constructor(public navCtrl: NavController) {
    this.text = 'Доступные категории';
    this.categories = [{
      id: 0,
      name: "животные",
      imgPath: "animals.png",
      firstEntry: true,
      enabled: true,
      order: 0
    },{
      id: 1,
      name: "Кухня",
      imgPath: "kitchen.jpg",
      firstEntry: true,
      enabled: true,
      order: 0
    },{
      id: 2,
      name: "Цвета",
      imgPath: "colors.jpg",
      firstEntry: true,
      enabled: true,
      order: 0
    },{
      id: 3,
      name: "Фрукты",
      imgPath: "fruits.jpg",
      firstEntry: true,
      enabled: true,
      order: 0
    }]
  }

  learn() {
    this.navCtrl.push(GamePage, { val: 1 })
  }

}
