import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchService } from './search.service';
import { Show } from './show';

@Component({
    moduleId: module.id,
    templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {

    searchForm: FormGroup;
    shows: Show[];
    isLoading: boolean;
    errorMessage: string;

    constructor(
        private fromBuilder: FormBuilder,
        private searchService: SearchService
    ) { }

    ngOnInit() {
        this.searchForm = this.fromBuilder.group({
            query: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    searchShows({ value }: { value: any }) {
        console.log(value.query);
        this.isLoading = true;
        this.resetSearch();
        this.searchService.search(value.query)
            .subscribe(shows => {
                console.log(shows);
                this.isLoading = false;
                this.shows = shows;
            },
            err => this.errorMessage = <any> err
            );
    }

    resetSearch()
    {
        this.errorMessage = null;
        this.shows = null;
        this.searchForm.reset();
    }
}