import { Component, OnInit } from '@angular/core';
import { CalEvent } from '../cal-event';
import { CalEventService } from '../cal-event.service';

@Component({
  selector: 'app-cal-events',
  templateUrl: './cal-events.component.html',
  styleUrls: ['./cal-events.component.scss']
})

export class CalEventsComponent implements OnInit {

  calEvents:  CalEvent[];
  constructor(private calEventService: CalEventService) {
  }

  ngOnInit() {
    this.getCalEvents();
  }

  getCalEvents(): void {
    this.calEventService.getCalEvents()
        .subscribe(calEvents => this.calEvents = calEvents);
  }

  add(name: string, dateStart: string, dateEnd: string): void {
    name = name.trim();
    if (!name) { return; }
    this.calEventService.addCalEvent({ name: name, dateStart: dateStart, dateEnd: dateEnd } as CalEvent)
      .subscribe(calEvent => {
        this.calEvents.push(calEvent);
      });
  }

  delete(calEvent: CalEvent): void {
    this.calEvents = this.calEvents.filter(h => h !== calEvent);
    this.calEventService.deleteCalEvent(calEvent).subscribe();
  }
}
