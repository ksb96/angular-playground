import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent {

  @HostBinding('class.dark-mode') isDarkMode = false;

  constructor() { }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    const body = document.body;
    body.classList.toggle('dark-mode');
  }
}
