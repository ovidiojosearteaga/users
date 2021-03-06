import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterComponent implements OnInit {

  toState:string = 'hideRegister';

  constructor() { }

  ngOnInit(): void {
    this.changeAnimationState();
  }

  private changeAnimationState() : void {
    setTimeout(
      () => this.toState = 'showRegister', 
      1
    );
  }

}
