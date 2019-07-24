import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dinner1Component } from './dinner1.component';

describe('Dinner1Component', () => {
  let component: Dinner1Component;
  let fixture: ComponentFixture<Dinner1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dinner1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dinner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
