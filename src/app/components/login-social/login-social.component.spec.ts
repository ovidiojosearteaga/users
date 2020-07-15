import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSocialComponent } from './login-social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginSocialComponent', () => {
  let component: LoginSocialComponent;
  let fixture: ComponentFixture<LoginSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSocialComponent ],
      imports: [
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
