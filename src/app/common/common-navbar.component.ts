import { style } from '@angular/animations';
import {Component} from '@angular/core'
import { AuthService } from '../user/services/auth.service';

@Component({
    selector: 'common-nav',
    templateUrl: './common-navbar.component.html',
    styles:[
        `
            .nav .nav-bar {font-size: 15px}
            @media (max-width: 1200px) {#searchForm {display: none;}}
            li > a.activeLink { color: #F97924;}
        `
    ]
})
export class CommonNavbarComponent{
    constructor(public authService: AuthService){}
}