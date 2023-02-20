import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewBusTicketComponent } from './review-bus-ticket/review-bus-ticket.component';
import { PrintBusTicketComponent } from './print-bus-ticket/print-bus-ticket.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookBusTicketComponent } from './book-bus-ticket/book-bus-ticket.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewBusTicketComponent,
    PrintBusTicketComponent,
    SearchBusComponent,
    BookBusTicketComponent,
    PassengerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
