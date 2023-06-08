import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishpageEnComponent } from './dishpage-en.component';

describe('DishpageEnComponent', () => {
  let component: DishpageEnComponent;
  let fixture: ComponentFixture<DishpageEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishpageEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishpageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
