import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkPageEnComponent } from './drink-page-en.component';

describe('DrinkPageEnComponent', () => {
  let component: DrinkPageEnComponent;
  let fixture: ComponentFixture<DrinkPageEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkPageEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkPageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
