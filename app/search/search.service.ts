import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Show } from './show';

@Injectable()
export class SearchService {

    private tvMazeUrl: string = 'https://api.tvmaze.com/search/shows';

    constructor(
        private http: Http
    ) { }

    search(query: any): Observable<Show[]>
    {
        let search: URLSearchParams = new URLSearchParams();
        search.set('q', query);
        return this.http.get(this.tvMazeUrl, { search })
            .map((res: Response) => <Show[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(msg);
    }
}