import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBusTicketComponent } from './book-bus-ticket.component';

describe('BookBusTicketComponent', () => {
  let component: BookBusTicketComponent;
  let fixture: ComponentFixture<BookBusTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBusTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBusTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
