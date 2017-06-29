import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { FeaturedComponent } from './featured.component';
import { ShowDetailsComponent } from './show-details.component';

import { FeaturedService } from './featured.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        FeaturedComponent,
        ShowDetailsComponent
    ],
    declarations: [
        FeaturedComponent,
        ShowDetailsComponent
    ],
    providers: [
        FeaturedService
    ],
})
export class FeaturedModule { }
