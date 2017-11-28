import { Component, OnInit } from '@angular/core';
import { CalEvent } from '../cal-event';
import { CalEventService } from '../cal-event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  calEvents: CalEvent[] = [];

  constructor(private calEventService: CalEventService) { }

  ngOnInit() {
    this.getCalEvents();
  }

  getCalEvents(): void {
    this.calEventService.getCalEvents()
    .subscribe(calEvents => this.calEvents = calEvents.slice(1, 5));
  }

}
