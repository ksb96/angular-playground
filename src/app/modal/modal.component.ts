import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() selectedResult: any;

  constructor() { }

  closeModal(): void {
    // Implement logic to close the modal.
    // For demonstration, we'll just reset the selectedResult to null.
    this.selectedResult = null;
  }
}
