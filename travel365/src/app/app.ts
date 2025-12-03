import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Travel365';
  currentYear = new Date().getFullYear();

  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About' }
  ];

  getNavLinksCount(): number {
    return this.navLinks.length;
  }
}
