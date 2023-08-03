import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalCourseComponent } from './seasonal-course.component';

describe('SeasonalCourseComponent', () => {
  let component: SeasonalCourseComponent;
  let fixture: ComponentFixture<SeasonalCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonalCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
