import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunch1Component } from './lunch1.component';

describe('Lunch1Component', () => {
  let component: Lunch1Component;
  let fixture: ComponentFixture<Lunch1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lunch1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lunch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
