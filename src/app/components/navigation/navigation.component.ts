import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MenuItem } from './../../interfaces/menu-item';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input() title:string = '';

  menu:MenuItem[] = [
    { path: '/', title: 'Home'},
    { path: '/login', title: 'Login'},
    { path: '/register', title: 'Register'},
    { path: '/profile', title: 'Profile'},
    { path: '/users', title: 'Users List'}, 
  ];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
