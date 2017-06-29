import { Component, OnInit, Input } from '@angular/core';
import { Carousel } from './carousel';

@Component({
    moduleId: module.id,
    selector: 'tv-carousel-image',
    templateUrl: 'carousel-image.component.html'
})

export class CarouselImageComponent implements OnInit {

    @Input() slide: Carousel;

    constructor() { }

    ngOnInit() { }
}