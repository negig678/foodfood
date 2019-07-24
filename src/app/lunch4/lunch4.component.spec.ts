import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunch4Component } from './lunch4.component';

describe('Lunch4Component', () => {
  let component: Lunch4Component;
  let fixture: ComponentFixture<Lunch4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lunch4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lunch4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
