import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalEventsComponent } from './cal-events.component';

describe('CalEventsComponent', () => {
  let component: CalEventsComponent;
  let fixture: ComponentFixture<CalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
