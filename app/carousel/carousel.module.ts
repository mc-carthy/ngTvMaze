import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { CarouselComponent } from './carousel.component';
import { CarouselImageComponent } from './carousel-image.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CarouselComponent,
    CarouselImageComponent
  ],
  exports: [
    CarouselComponent,
    CarouselImageComponent
  ]
})

export class CarouselModule { }