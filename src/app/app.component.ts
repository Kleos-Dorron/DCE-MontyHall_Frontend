import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MontyHall Game Paradox';
  simulationResults: any;

  updateSimulationResults(result: any) {
    this.simulationResults = result;
  }
}
