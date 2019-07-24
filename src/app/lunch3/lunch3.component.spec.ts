import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunch3Component } from './lunch3.component';

describe('Lunch3Component', () => {
  let component: Lunch3Component;
  let fixture: ComponentFixture<Lunch3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lunch3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lunch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
