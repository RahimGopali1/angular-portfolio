import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class HeaderComponent {
  isActive = false;

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
