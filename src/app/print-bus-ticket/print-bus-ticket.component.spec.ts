import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBusTicketComponent } from './print-bus-ticket.component';

describe('PrintBusTicketComponent', () => {
  let component: PrintBusTicketComponent;
  let fixture: ComponentFixture<PrintBusTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBusTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintBusTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
