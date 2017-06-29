import { Component, OnInit } from '@angular/core';
import { Featured } from './featured';
import { FeaturedService } from './featured.service';

@Component({
    moduleId: module.id,
    selector: 'tv-featured-shows',
    templateUrl: 'featured.component.html',
    styleUrls: [
        'featured.component.css'
    ]
})

export class FeaturedComponent implements OnInit {
    
    shows: Featured[];
    errorMessage: string;

    constructor(
        private featuredService: FeaturedService
    ) { }

    ngOnInit() {
        this.getFeaturedShows();
    }

    getFeaturedShows()
    {
        this.featuredService.getFeaturedShows()
            .subscribe(
                (shows: Featured[]) => {
                    console.log(shows),
                    this.shows = shows
                },
                error => this.errorMessage = <any>error
            );
    }
}