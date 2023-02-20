import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent {
  submitted = false;
  passengerDetailsForm = new FormGroup({
    name: new FormControl('',  Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  
  constructor(private storageService: StorageService){}

  get f() { return this.passengerDetailsForm.controls; }

  onSubmit(){
    this.submitted = true;
    const {name, mobile, email } = this.passengerDetailsForm.value
    this.storageService.saveSession('passenger-details', {name: name, mobile: mobile, email: email})
  }
}
