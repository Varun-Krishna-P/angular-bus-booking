import { Injectable } from '@angular/core';
import { BUSES } from '../bus-data';
import { Bus } from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor() { }

  filterBuses(from: any, to: any): Bus[] {
    return BUSES.filter(bus => bus.from.toUpperCase() === from.toUpperCase() && bus.to.toUpperCase() === to.toUpperCase())
  }
}
