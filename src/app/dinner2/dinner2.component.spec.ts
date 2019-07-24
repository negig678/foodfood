import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dinner2Component } from './dinner2.component';

describe('Dinner2Component', () => {
  let component: Dinner2Component;
  let fixture: ComponentFixture<Dinner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dinner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dinner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
