import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Details } from './details';
import { Episode } from './episode';

@Injectable()
export class DetailsService {

    private tvMazeUrl: string = 'https://api.tvmaze.com';

    constructor(
        private http: Http
    ) { }

    getShowDetails(id: number, show: string): Observable<any>
    {
        return Observable.forkJoin([
            this.getShowInfo(show),
            this.getEpisodes(id)
        ]);
    }

    getShowInfo(show: string): Observable<Details>
    {
        return this.http.get(`${this.tvMazeUrl}/singlesearch/shows?q=${show}`)
            .map((res: Response) => <Details[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    getEpisodes(id: number): Observable<Episode[]>
    {
        return this.http.get(`${this.tvMazeUrl}/shows/${id}/episodes`)
            .map((res: Response) => <Details[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(msg);
    }
}