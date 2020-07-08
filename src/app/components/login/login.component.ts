import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'changeState',
      [
        state('hideLogin', style({opacity:0})),
        state('showLogin', style({opacity:1})),
        transition('hideLogin => showLogin', [animate('1s ease-out')])
      ]
    )
  ]
})
export class LoginComponent implements OnInit {

  @Input() currentState:string;

  constructor() { }

  ngOnInit(): void {
  }

}
