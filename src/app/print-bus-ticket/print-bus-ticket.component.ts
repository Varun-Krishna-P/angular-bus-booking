import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-print-bus-ticket',
  templateUrl: './print-bus-ticket.component.html',
  styleUrls: ['./print-bus-ticket.component.css']
})
export class PrintBusTicketComponent implements OnInit{
  bookingDate = new Date().toDateString();
  busTicket: any;
  userDetail: any;
  ticketID = uuidv4();
  selectedSeats: any;
  totalFare: number = 0;
  constructor(private storageService: StorageService){}

  ngOnInit(){
    this.busTicket = JSON.parse(this.storageService.getSessionDetail('bus-ticket') || '{}')
    this.userDetail = JSON.parse(this.storageService.getSessionDetail('passenger-details') || '{}')
    this.selectedSeats = this.busTicket.map((ticket: { row: any; seatNo: any; }) => ticket.row+ticket.seatNo).join(" ");
    this.totalFare = this.busTicket.map((ticket: { price: any; }) => ticket.price).reduce((a: any, b: any) => a + b, 0)
  }

}
