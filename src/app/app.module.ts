import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { SimulationResultsComponent } from './simulation-results/simulation-results.component';
import { FormsModule } from '@angular/forms';
import { MontyHallService } from './monty-hall/monty-hall.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SimulationFormComponent,
    SimulationResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [MontyHallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
