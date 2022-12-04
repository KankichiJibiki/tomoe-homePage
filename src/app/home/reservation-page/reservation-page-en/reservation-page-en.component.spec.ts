import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPageEnComponent } from './reservation-page-en.component';

describe('ReservationPageEnComponent', () => {
  let component: ReservationPageEnComponent;
  let fixture: ComponentFixture<ReservationPageEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPageEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
