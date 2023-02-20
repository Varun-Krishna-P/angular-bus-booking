import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bus } from '../models/bus';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent {
  constructor(private busService: BusService){}
  submitted = false;
  buses: Bus[] = []

  busSearchForm = new FormGroup({
    from: new FormControl('',  Validators.required),
    to: new FormControl('', Validators.required),
    time: new FormControl('')
  })

  get f() { return this.busSearchForm.controls; }

  onSubmit(){
    this.submitted = true;
    const {from, to, time } = this.busSearchForm.value
    this.buses = this.busService.filterBuses(from, to)
    
  }

}
