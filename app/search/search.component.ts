import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/subscription';
import { SearchService } from './search.service';
import { NavService } from './../shared/nav.service';
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
    subscription: Subscription;
    item: string;

    constructor(
        private fromBuilder: FormBuilder,
        private searchService: SearchService,
        private navService: NavService
    ) { }

    ngOnInit() {
        this.getQuery();
        if (this.item)
        {
            this.searchFromBar();
        }
        this.searchForm = this.fromBuilder.group({
            query: ['', [Validators.required, Validators.minLength(2)]]
        });
    }

    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }

    getQuery()
    {
        this.subscription = this.navService.navItem$
            .subscribe(
                item => {
                    this.item = item;
                },
                err => this.errorMessage = <any>err
            );
    }

    searchFromBar()
    {
        this.isLoading = true;
        this.searchService.search(this.item)
            .subscribe(shows => {
                console.log(shows);
                this.isLoading = false;
                this.shows = shows;
            },
            err => this.errorMessage = <any> err
            );  
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