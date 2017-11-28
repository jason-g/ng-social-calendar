import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CalEvent } from '../cal-event';
import { CalEventService } from '../cal-event.service';

@Component({
  selector: 'app-cal-event-detail',
  templateUrl: './cal-event-detail.component.html',
  styleUrls: ['./cal-event-detail.component.scss']
})
export class CalEventDetailComponent implements OnInit {
  @Input() calEvent: CalEvent;

  constructor(
    private route: ActivatedRoute,
    private calEventService: CalEventService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCalEvent();
  }

  getCalEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.calEventService.getCalEvent(id)
      .subscribe(calEvent => this.calEvent = calEvent);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.calEventService.updateCalEvent(this.calEvent)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.calEventService.deleteCalEvent(this.calEvent)
      .subscribe(() => this.goBack());
  }

}
