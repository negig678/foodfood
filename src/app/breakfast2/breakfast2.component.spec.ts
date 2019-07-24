import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breakfast2Component } from './breakfast2.component';

describe('Breakfast2Component', () => {
  let component: Breakfast2Component;
  let fixture: ComponentFixture<Breakfast2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breakfast2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breakfast2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
