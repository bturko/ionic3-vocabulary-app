import { NgModule } from '@angular/core';
import { TagCategoriesComponent } from './tag-categories/tag-categories';
import { BadgeComponent } from './badge/badge';

@NgModule({
	declarations: [TagCategoriesComponent,
    BadgeComponent],
	imports: [],
	exports: [TagCategoriesComponent,
    BadgeComponent]
})
export class ComponentsModule {}
