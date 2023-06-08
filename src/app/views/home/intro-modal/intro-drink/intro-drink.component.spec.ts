import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDrinkComponent } from './intro-drink.component';

describe('IntroDrinkComponent', () => {
  let component: IntroDrinkComponent;
  let fixture: ComponentFixture<IntroDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
