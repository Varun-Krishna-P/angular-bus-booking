import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-review-bus-ticket',
  templateUrl: './review-bus-ticket.component.html',
  styleUrls: ['./review-bus-ticket.component.css']
})
export class ReviewBusTicketComponent implements OnInit{
  ticketDetail: any;
  selectedSeats: any;
  constructor(private storageService: StorageService){}

  ngOnInit(): void {
    this.ticketDetail = JSON.parse(this.storageService.getSessionDetail('bus-ticket') || '{}')
    this.selectedSeats = this.ticketDetail.map((ticket: { row: any; seatNo: any; }) => ticket.row+ticket.seatNo).join();
  }
}
