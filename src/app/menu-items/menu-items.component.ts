import { Component, input } from '@angular/core';

@Component({
  selector: 'button[sidebutton]',
  standalone: true,
  imports: [],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  title = input.required<string>();
  path = input.required<string>();


}
