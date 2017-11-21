import { Injectable }      from '@angular/core';
import { Http }            from '@angular/http';
import { ICategory }       from '../interfaces/category.interface';

@Injectable()
export class HttpCategoriesService {
    http: Http;
    categories: ICategory[];

    constructor(http: Http) {
        this.http = http;
    }

    loadCategories(): Promise<ICategory[]> {
        let url_path = './assets/data/categories.json';
        return new Promise(resolve => {
            this.http.get(url_path)
                .map((res) => res.json())
                .subscribe(data => {
                    this.categories = data;
                    resolve(this.categories);
                }, (rej) => {
                    console.error("Could not load local data", rej)
                });
        });
    }

}