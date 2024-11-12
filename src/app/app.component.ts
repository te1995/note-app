import { Component, inject, signal } from '@angular/core';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { NewNotesComponent } from "./notes-items/new-note/new-notes/new-notes.component";
import { NotesItemsComponent } from "./notes-items/notes-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuItemsComponent, NewNotesComponent, NotesItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'note_app';
  tags: string[] = [];

    addTag(tagName: string) {
        this.tags?.push(tagName);
    }

    pushRand() {
      this.addTag("yaaa");
    }



}
