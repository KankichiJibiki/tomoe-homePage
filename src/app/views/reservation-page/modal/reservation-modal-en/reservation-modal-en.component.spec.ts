import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationModalEnComponent } from './reservation-modal-en.component';

describe('ReservationModalEnComponent', () => {
  let component: ReservationModalEnComponent;
  let fixture: ComponentFixture<ReservationModalEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationModalEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationModalEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
