import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookBusTicketComponent } from './book-bus-ticket/book-bus-ticket.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PrintBusTicketComponent } from './print-bus-ticket/print-bus-ticket.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { SearchBusComponent } from './search-bus/search-bus.component';

const routes: Routes = [
  {path: 'review-bus-ticket', component: ReviewBusTicketComponent},
  {path: 'print-bus-ticket', component: PrintBusTicketComponent},
  {path: 'book-bus-ticket/:id', component: BookBusTicketComponent},
  {path: 'passenger-details', component: PassengerDetailsComponent},
  {path: '', component: SearchBusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
