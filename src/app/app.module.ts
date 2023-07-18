import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DarkModeToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
