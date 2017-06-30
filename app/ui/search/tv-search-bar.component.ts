import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavService } from './../../shared/nav.service';

@Component({
    moduleId: module.id,
    selector: 'tv-search-bar',
    templateUrl: 'tv-search-bar.component.html'
})

export class TvSearchBarComponent {

    searchForm: FormGroup;

    constructor(
        private fromBuilder: FormBuilder,
        private router: Router,
        private navService: NavService
    ) { }

    ngOnInit() {
        this.searchForm = this.fromBuilder.group({
            query: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    search({ value }: { value: any })
    {
        console.log(value.query);
        this.navService.changeNav(value.query);
        this.searchForm.reset();
        this.router.navigate(['/search']);
    }

}