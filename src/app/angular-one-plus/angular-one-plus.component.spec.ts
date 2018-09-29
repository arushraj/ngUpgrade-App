import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOnePlusComponent } from './angular-one-plus.component';

describe('AngularOnePlusComponent', () => {
  let component: AngularOnePlusComponent;
  let fixture: ComponentFixture<AngularOnePlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOnePlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOnePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
