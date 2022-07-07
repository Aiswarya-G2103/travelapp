import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { SearchplaceComponent } from './searchplace/searchplace.component';
import { ViewplaceComponent } from './viewplace/viewplace.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    SearchplaceComponent,
    ViewplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
