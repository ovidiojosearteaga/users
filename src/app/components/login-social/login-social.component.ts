import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.scss'],
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
export class LoginSocialComponent implements OnInit {

  @Input() currentState:string;

  constructor() { }

  ngOnInit(): void {
  }

}
