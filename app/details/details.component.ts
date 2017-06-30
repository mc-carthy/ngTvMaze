import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { Details } from './details';
import { Episode } from './episode';

@Component({
    moduleId: module.id,
    templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit {

    details: Details;
    episodes: Episode[];
    isLoading: boolean;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private detailsService: DetailsService
    )
    {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.params['show']);
    }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        let show = this.route.snapshot.params['show'];
        this.getShowDetails(id, show);
    }

    getShowDetails(id: number, show: string)
    {
        this.isLoading = true;
        this.detailsService.getShowDetails(id, show)
            .subscribe(
                results => {
                    console.log(results);
                    this.isLoading = false;
                    this.details = results[0];
                    this.episodes = results[1];
                },
                err => this.errorMessage = <any>err
            );
    }
}