import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { SearchComponent } from './search/search.component';
import { ModalComponent } from './modal/modal.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DarkModeToggleComponent,
    SearchComponent,
    ModalComponent,
    SignupComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
