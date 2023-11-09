import { Component, Output, EventEmitter } from '@angular/core';
import { MontyHallService } from '../monty-hall/monty-hall.service';


@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css'],
})
export class SimulationFormComponent {
  numSimulations: number = 100;
  changeDoor: boolean = true;
  isSimulating: boolean = false;
  errorMessage: string = '';
  simulationResults: any = null;

  constructor(private montyHallService: MontyHallService) { }

  @Output() simulationResultsReceived = new EventEmitter<any>();

  startSimulation() {
    const request = {
      numSimulations: this.numSimulations,
      changeDoor: this.changeDoor,
    };

    this.montyHallService.simulateGame(request).subscribe({
      next: (result) => {
        console.log('API Response', result);
        // Handle the simulation results, e.g., update the results component
        this.isSimulating = false;
        this.simulationResultsReceived.emit(result); // Notify the parent component
      },
      error: (error) => {
        console.log('API Error:', error);
        // Handle errors
        this.isSimulating = false;
        this.errorMessage = 'An error occurred while simulating the Monty Hall game.';
      },
    });
  }
}
