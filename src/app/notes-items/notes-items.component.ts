import { Component } from '@angular/core';
import { Ticket } from './ticket.model';
import { NewNotesComponent } from "./new-note/new-notes/new-notes.component";
import { PrimaryButtonComponent } from '../shared/primary-button/primary-button.component';
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";

@Component({
  selector: 'app-notes-items',
  standalone: true,
  imports: [NewNotesComponent, PrimaryButtonComponent, TicketDetailsComponent],
  templateUrl: './notes-items.component.html',
  styleUrl: './notes-items.component.css'
})
export class NotesItemsComponent {
  tickets?: Ticket[] = [];
  displayNewNote = false;
  ticketInDisplay!: Ticket;

  addTodo(item: Ticket) {
    if(item.title === "") {
      item.title = "Untitled Note";
    }

    this.tickets?.push(item);
    this.displayNewNote = false;
  }

  addNote() {
    this.displayNewNote = true;
  }

  displayTicket(ticket: Ticket) {
    this.ticketInDisplay = ticket;
  }
}
