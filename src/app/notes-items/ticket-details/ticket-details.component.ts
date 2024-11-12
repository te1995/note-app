import { Component, input } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {

  ticket = input.required<Ticket>();

  

}
