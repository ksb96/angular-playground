import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // [x: string]: any;
  searchQuery!: String;
  searchResults: any[] = [];

  constructor() { }

  performSearch(): void {
    // Perform your search logic here.
    // For demonstration purposes, we'll use a dummy search result.
    this.searchResults = [{ title: '', description: 'This is the first search result.' },
    ];
  }

  openModal(result: any): void {
    // Implement logic to open the modal and display the result details.
    // Implement logic to open the modal and display the result details.
    // this['selectedResult'] = result;
    console.log(result); // For demonstration, we'll just log the result to the console.
  }
}
