import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dinner3Component } from './dinner3.component';

describe('Dinner3Component', () => {
  let component: Dinner3Component;
  let fixture: ComponentFixture<Dinner3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dinner3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dinner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
