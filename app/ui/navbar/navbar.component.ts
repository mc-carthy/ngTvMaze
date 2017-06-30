import { Component, OnInit } from '@angular/core';
import { navItem } from './navItems';

@Component({
    moduleId: module.id,
    selector: 'tv-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent {

    appName: string = "ngTvMaze";

    navItems: navItem[] = [
        {
            routerLink: '',
            label: 'Home',
            active: false
        },
        {
            routerLink: '/search',
            label: 'Find Shows',
            active: false
        }
    ]
}