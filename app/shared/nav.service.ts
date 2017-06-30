import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {

    private navItemSource = new BehaviorSubject<string>(null);

    navItem$ = this.navItemSource.asObservable();

    changeNav(query: string)
    {
        this.navItemSource.next(query);
    }
}