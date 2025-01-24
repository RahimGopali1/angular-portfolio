import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  isLoading = true;
  isHidden = false;

  ngOnInit(): void {
    this.showLoadingScreen();
  }

  showLoadingScreen(): void {
    setTimeout(() => {
      this.isHidden = true; // Add the `hidden` class to trigger the animation
      setTimeout(() => {
        this.isLoading = false; // Remove the loading screen from the DOM
      }, 500); // Wait for the CSS transition to complete
    }, 3000); // Simulated loading delay
  }
}
