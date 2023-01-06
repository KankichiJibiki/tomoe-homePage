import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPageEnComponent } from './map-page-en.component';

describe('MapPageEnComponent', () => {
  let component: MapPageEnComponent;
  let fixture: ComponentFixture<MapPageEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPageEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPageEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
