import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroInnerComponent } from './intro-inner.component';

describe('IntroInnerComponent', () => {
  let component: IntroInnerComponent;
  let fixture: ComponentFixture<IntroInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
