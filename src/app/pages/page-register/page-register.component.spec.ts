import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterComponent } from './page-register.component';

describe('PageRegisterComponent', () => {
  let component: PageRegisterComponent;
  let fixture: ComponentFixture<PageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toState property init with hideRegister value', () => {
    expect(component.toState).toEqual("hideRegister");
  });

  it('Pass 200ms toState property is showRegister', () => {
    jasmine.clock().install();
    
    expect(component.toState).toEqual("hideRegister");

    component.ngOnInit();
    jasmine.clock().tick(10);
    expect(component.toState).toEqual("showRegister");
    jasmine.clock().uninstall();
  });
});
