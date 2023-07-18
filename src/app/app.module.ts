import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { SearchComponent } from './search/search.component';
import { ModalComponent } from './modal/modal.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DarkModeToggleComponent,
    SearchComponent,
    ModalComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
