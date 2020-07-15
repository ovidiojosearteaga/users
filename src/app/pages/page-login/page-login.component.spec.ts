import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginComponent } from './page-login.component';

describe('PageLoginComponent', () => {
  let component: PageLoginComponent;
  let fixture: ComponentFixture<PageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toState property init with hideLogin value', () => {
    expect(component.toState).toEqual("hideLogin");
  });

  it('Pass 200ms toState property is showLogin', () => {

    jasmine.clock().install();

    expect(component.toState).toEqual("hideLogin");

    component.ngOnInit();    
    jasmine.clock().tick(10);
    expect(component.toState).toEqual("showLogin");
    jasmine.clock().uninstall();
  });
});
