import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dinner4Component } from './dinner4.component';

describe('Dinner4Component', () => {
  let component: Dinner4Component;
  let fixture: ComponentFixture<Dinner4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dinner4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dinner4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
