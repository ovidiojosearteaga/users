import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() currentState:string;

  constructor() { }

  ngOnInit(): void {
  }

}
