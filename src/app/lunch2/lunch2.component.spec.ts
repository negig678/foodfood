import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunch2Component } from './lunch2.component';

describe('Lunch2Component', () => {
  let component: Lunch2Component;
  let fixture: ComponentFixture<Lunch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lunch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lunch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
