import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerCityComponent } from './pointer-city.component';

describe('PointerCityComponent', () => {
  let component: PointerCityComponent;
  let fixture: ComponentFixture<PointerCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointerCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
