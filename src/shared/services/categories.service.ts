import { Injectable }            from '@angular/core';
import { ICategory }             from '../interfaces/category.interface';
import { HttpCategoriesService } from '../services/categories.http.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
    categories: ICategory[];
    //platformName: string;

    constructor (private httpCategoriesService: HttpCategoriesService/*private settingsService: SettingsService*/) {
        this.httpCategoriesService = httpCategoriesService;
    }

    /**
     * Returns user enabled categories list
     * @returns {Promise<T>}
     */
    getEnabledCategories():Promise<ICategory[]>{
        if(this.categories){
            return new Promise(resolve => resolve(this.categories));
        }
        else{
            //let url_path = !this.settingsService.isAndroid() ? './assets/data/categories.json' : './assets/data/categories.json';
            return new Promise(resolve => {
                this.httpCategoriesService.loadCategories()
                    .then(categories => {
                        this.categories = categories.filter((cat) => cat.enabled);
                        resolve(this.categories);
                    }, (rej) => {console.error("Could not load local data", rej)});
            });
        }
    }

}