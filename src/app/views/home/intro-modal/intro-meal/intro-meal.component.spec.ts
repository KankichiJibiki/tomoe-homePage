import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMealComponent } from './intro-meal.component';

describe('IntroMealComponent', () => {
  let component: IntroMealComponent;
  let fixture: ComponentFixture<IntroMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
