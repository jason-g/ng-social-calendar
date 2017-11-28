import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { CalEvent } from '../cal-event';
import { CalEventService } from '../cal-event.service';

@Component({
  selector: 'app-cal-event-search',
  templateUrl: './cal-event-search.component.html',
  styleUrls: [ './cal-event-search.component.scss' ]
})
export class CalEventSearchComponent implements OnInit {
  calEvents$: Observable<CalEvent[]>;
  private searchTerms = new Subject<string>();

  constructor(private calEventService: CalEventService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.calEvents$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.calEventService.searchCalEvents(term)),
    );
  }
}