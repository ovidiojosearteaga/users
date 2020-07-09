import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger(
      'changeState',
      [
        state('hideRegister', style({opacity: 0})),
        state('showRegister', style({opacity: 1})),
        transition('hideRegister => showRegister', [animate('1s ease-out')])
      ]
    )
  ]
})
export class RegisterComponent implements OnInit {

  @Input() currentState:string;

  constructor() { }

  ngOnInit(): void {
  }

}
