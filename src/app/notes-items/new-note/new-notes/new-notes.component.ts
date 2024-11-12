import { Component, output } from '@angular/core';
import { Ticket } from '../../ticket.model';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-new-notes',
  standalone: true,
  imports: [FormsModule, PrimaryButtonComponent],
  templateUrl: './new-notes.component.html',
  styleUrl: './new-notes.component.css',
})
export class NewNotesComponent {
  newtodo = output<Ticket>();
  title = '';
  description = '';
  tags = '';
  tagsArray?: string[];

  onSubmit() {
    this.tagsArray = this.tags.split(' ');

    this.newtodo.emit({
      title: this.title,
      lastEdit: '12.11.2024',
      tags: this.tagsArray.filter(item => (item !== " ")),
      description: this.description,
      id: Math.random().toString(),
    });
    this.title = '';
    this.description = '';
    this.tags = '';
  }
}
