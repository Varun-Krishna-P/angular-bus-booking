import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BUSES } from '../bus-data';
import { Bus } from '../models/bus';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-book-bus-ticket',
  templateUrl: './book-bus-ticket.component.html',
  styleUrls: ['./book-bus-ticket.component.css']
})
export class BookBusTicketComponent implements OnInit {
  selectedTicket: any = []
  ticketAmount = 600
  selectedBus: Bus | undefined;
  total = 0
  constructor(private storageService: StorageService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.selectedBus = BUSES.find(bus => bus.id == parseInt(id))
    });

  }

  addTicket(seatNo: any, row:any): void {
    const tmpObj: any = {}
    tmpObj["seatNo"] = seatNo
    tmpObj["row"] = row
    tmpObj['price'] = this.ticketAmount
    tmpObj['type'] = this.selectedBus?.type
    tmpObj['from'] = this.selectedBus?.from
    tmpObj['to'] = this.selectedBus?.to
    this.selectedTicket.push(tmpObj)
    this.calculateTotal()

  }

  calculateTotal(){
    this.total = this.selectedTicket.map((ticket: { price: any; }) => ticket.price).reduce((a: any, b: any) => a + b, 0)
  }

  onConfirmTicket(): void {
    this.storageService.saveSession('bus-ticket', this.selectedTicket)
    this.router.navigate(['passenger-details']);
  }
}
