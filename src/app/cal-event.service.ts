import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalEvent } from './cal-event';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CalEventService {
  private calEventsUrl = 'api/calEvents';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getCalEvents(): Observable<CalEvent[]> {
    return this.http.get<CalEvent[]>(this.calEventsUrl)
    .pipe(
      catchError(this.handleError('getCalEvents', []))
    );
  }

  getCalEvent(id: number): Observable<CalEvent> {
    const url = `${this.calEventsUrl}/${id}`;
    return this.http.get<CalEvent>(url).pipe(
      tap(_ => console.log(`fetched calEvent id=${id}`)),
      catchError(this.handleError<CalEvent>(`getCalEvent id=${id}`))
    );
  }

  updateCalEvent(calEvent: CalEvent): Observable<any> {
    return this.http.put(this.calEventsUrl, calEvent, httpOptions).pipe(
      tap(_ => console.log(`updated calEvent id=${calEvent.id}`)),
      catchError(this.handleError<any>('updateCalEvent'))
    );
  }

  addCalEvent(calEvent: CalEvent): Observable<CalEvent> {
    return this.http.post<CalEvent>(this.calEventsUrl, calEvent, httpOptions).pipe(
      tap(_ => console.log(`added calEvent id=${calEvent.id}`)),
      catchError(this.handleError<CalEvent>('addCalEvent'))
    );
  }

  deleteCalEvent (calEvent: CalEvent | number): Observable<CalEvent> {
    const id = typeof calEvent === 'number' ? calEvent : calEvent.id;
    const url = `${this.calEventsUrl}/${id}`;

    return this.http.delete<CalEvent>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted calEvent id=${id}`)),
      catchError(this.handleError<CalEvent>('deleteCalEvent'))
    );
  }

  searchCalEvents(term: string): Observable<CalEvent[]> {
    if (!term.trim()) {
      // if not search term, return empty calEvent array.
      return of([]);
    }
    return this.http.get<CalEvent[]>(`api/calEvents/?name=${term}`).pipe(
      tap(_ => console.log(`found calEvents matching "${term}"`)),
      catchError(this.handleError<CalEvent[]>('searchCalEvents', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
