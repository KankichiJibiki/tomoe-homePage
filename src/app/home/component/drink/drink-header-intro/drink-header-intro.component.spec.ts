import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkHeaderIntroComponent } from './drink-header-intro.component';

describe('DrinkHeaderIntroComponent', () => {
  let component: DrinkHeaderIntroComponent;
  let fixture: ComponentFixture<DrinkHeaderIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkHeaderIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkHeaderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
