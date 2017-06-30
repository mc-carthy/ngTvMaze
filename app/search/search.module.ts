import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

import { SearchComponent } from './search.component';

import { SearchService } from './search.service';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'search', component: SearchComponent }
        ])
    ],
    exports: [
        SearchComponent
    ],
    declarations: [
        SearchComponent
    ],
    providers: [
        SearchService
    ],
})

export class SearchModule { }
