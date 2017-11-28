import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalEventsComponent } from './cal-events/cal-events.component';
import { CalEventDetailComponent } from './cal-event-detail/cal-event-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'calEvents', component: CalEventsComponent},
  { path: 'detail/:id', component: CalEventDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
