import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalEventSearchComponent } from './cal-event-search.component';

describe('CalEventSearchComponent', () => {
  let component: CalEventSearchComponent;
  let fixture: ComponentFixture<CalEventSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalEventSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalEventSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
