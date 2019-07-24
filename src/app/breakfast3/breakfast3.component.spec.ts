import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breakfast3Component } from './breakfast3.component';

describe('Breakfast3Component', () => {
  let component: Breakfast3Component;
  let fixture: ComponentFixture<Breakfast3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breakfast3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breakfast3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
