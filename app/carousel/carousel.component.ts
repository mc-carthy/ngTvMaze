import { Component, OnInit } from '@angular/core';
import { CarouselService } from './carousel.service';
import { Carousel } from './carousel';

@Component({
    moduleId: module.id,
    selector: 'tv-carousel-container',
    templateUrl: 'carousel.component.html'
})

export class CarouselComponent implements OnInit {
 
    slides: Carousel[];
    errorMessage: string;
 
    constructor(
        private carouselService: CarouselService
    ) { }

    ngOnInit() {
        this.getSlides()
    }

    getSlides()
    {
        this.carouselService.getCarouselItems()
            .subscribe(
                slides => this.slides = slides,
                error => this.errorMessage = <any>error
            );
    }
}