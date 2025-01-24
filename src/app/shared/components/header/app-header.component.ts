import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class HeaderComponent {
  isActive = false;

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
