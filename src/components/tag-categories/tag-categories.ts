import { Component }                from '@angular/core';
import { ICategory }                from '../../shared/interfaces/category.interface';
import { GamePage }                 from '../../pages/learn/game/game';
import { NavController }            from 'ionic-angular';
import { Http }                     from '@angular/http';

@Component({
  selector: 'tag-categories',
  templateUrl: 'tag-categories.html'
})
export class TagCategoriesComponent {

  text: string;
  categories: ICategory[];

  constructor(public navCtrl: NavController, private http: Http) {
    this.text = 'Доступные категории';
    this.http.get('/assets/data/categories.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.categories = data;
          console.log( this.categories )
        }, (rej) => {console.error("Could not load local data",rej)});
  }

  learn() {
    this.navCtrl.push(GamePage, { val: 1 })
  }

}
