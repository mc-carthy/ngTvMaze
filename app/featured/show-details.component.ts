import { Component, OnInit, Input } from '@angular/core';
import { Featured } from './featured';

@Component({
    moduleId: module.id,
    selector: 'tv-show-details',
    templateUrl: 'show-details.component.html',
    styleUrls: [
        'featured.component.css'
    ]
})

export class ShowDetailsComponent implements OnInit {

    @Input() show: Featured;

    constructor() { }

    ngOnInit() { }
}