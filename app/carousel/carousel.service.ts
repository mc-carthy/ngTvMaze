import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Carousel } from './carousel';

@Injectable()
export class CarouselService {

    private carouselUrl: string = 'api/carousel_items.json';

    constructor(
        private http: Http
    ) { }

    getCarouselItems(): Observable<Carousel[]>
    {
        return this.http.get(this.carouselUrl)
            .map((res: Response) => <Carousel[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(msg);
    }

}