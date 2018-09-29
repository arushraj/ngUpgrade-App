import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTwoPlusComponent } from './angular-two-plus.component';

describe('AngularTwoPlusComponent', () => {
  let component: AngularTwoPlusComponent;
  let fixture: ComponentFixture<AngularTwoPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTwoPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTwoPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
