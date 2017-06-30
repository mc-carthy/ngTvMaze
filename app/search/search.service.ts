import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Show } from './show';

@Injectable()
export class SearchService {

    constructor(
        private http: Http;
    ) { }
}