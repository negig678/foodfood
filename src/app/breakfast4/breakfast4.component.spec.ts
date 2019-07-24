import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Breakfast4Component } from './breakfast4.component';

describe('Breakfast4Component', () => {
  let component: Breakfast4Component;
  let fixture: ComponentFixture<Breakfast4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Breakfast4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Breakfast4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
