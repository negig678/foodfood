import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breakfast1Component } from './breakfast1.component';

describe('Breakfast1Component', () => {
  let component: Breakfast1Component;
  let fixture: ComponentFixture<Breakfast1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breakfast1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breakfast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
