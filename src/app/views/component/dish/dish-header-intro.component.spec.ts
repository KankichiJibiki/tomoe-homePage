import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishHeaderIntroComponent } from './dish-header-intro.component';

describe('DishHeaderIntroComponent', () => {
  let component: DishHeaderIntroComponent;
  let fixture: ComponentFixture<DishHeaderIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishHeaderIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishHeaderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
