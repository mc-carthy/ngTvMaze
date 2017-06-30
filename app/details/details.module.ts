import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';
import { DetailsService } from './details.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'details/:show/:id', component: DetailsComponent }
        ])
    ],
    exports: [
        DetailsComponent
    ],
    declarations: [
        DetailsComponent
    ],
    providers: [
        DetailsService
    ],
})

export class DetailsModule { }
