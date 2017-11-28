import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { CalEventsComponent } from './cal-events/cal-events.component';
import { CalEventDetailComponent } from './cal-event-detail/cal-event-detail.component';
import { CalEventService } from './cal-event.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalEventSearchComponent } from './cal-event-search/cal-event-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CalEventsComponent,
    CalEventDetailComponent,
    DashboardComponent,
    CalEventSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CalEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
