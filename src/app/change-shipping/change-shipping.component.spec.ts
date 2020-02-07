import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeShippingComponent } from './change-shipping.component';

describe('ChangeShippingComponent', () => {
  let component: ChangeShippingComponent;
  let fixture: ComponentFixture<ChangeShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
