import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalEventDetailComponent } from './cal-event-detail.component';

describe('CalEventDetailComponent', () => {
  let component: CalEventDetailComponent;
  let fixture: ComponentFixture<CalEventDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalEventDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
