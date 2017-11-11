import { Component }                from '@angular/core';
import { ICategory }                from '../../shared/interfaces/category.interface';
import { GamePage }                 from '../../pages/learn/game/game';
import { NavController }            from 'ionic-angular';
import { Http }                     from '@angular/http';
import { Toast }                    from '@ionic-native/toast';

@Component({
  selector: 'tag-categories',
  templateUrl: 'tag-categories.html'
})
export class TagCategoriesComponent {

  text: string;
  categories: ICategory[];

  constructor(
      public navCtrl: NavController,
      private http: Http,
      private toast: Toast
  ){
    this.text = 'Доступные категории';
    this.http.get('/assets/data/categories.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.categories = data;
        }, (rej) => {
          //if (this.platform.is('cordova')) {}
          this.toast.show(`Не удалось прочесть данные`, '5000', 'center').subscribe(
              toast => {
                console.error("Не удалось прочесть данные", rej, toast);
              }
          );
        });
  }

  learn() {
    this.navCtrl.push(GamePage, { val: 1 })
  }

}
