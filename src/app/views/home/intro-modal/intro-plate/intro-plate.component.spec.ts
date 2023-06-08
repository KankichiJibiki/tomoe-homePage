import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPlateComponent } from './intro-plate.component';

describe('IntroPlateComponent', () => {
  let component: IntroPlateComponent;
  let fixture: ComponentFixture<IntroPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
