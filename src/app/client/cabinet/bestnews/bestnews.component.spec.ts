import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestnewsComponent } from './bestnews.component';

describe('BestnewsComponent', () => {
  let component: BestnewsComponent;
  let fixture: ComponentFixture<BestnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
