import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {

  toState:string = 'hideLogin';

  ngOnInit(): void {
    this.changeAnimationState();
  }

  private changeAnimationState() : void {
    setTimeout(
      () => this.toState = 'showLogin', 
      1
    );
  }

}
