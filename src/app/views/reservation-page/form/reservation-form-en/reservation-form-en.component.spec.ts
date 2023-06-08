import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationFormEnComponent } from './reservation-form-en.component';

describe('ReservationFormEnComponent', () => {
  let component: ReservationFormEnComponent;
  let fixture: ComponentFixture<ReservationFormEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationFormEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationFormEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
