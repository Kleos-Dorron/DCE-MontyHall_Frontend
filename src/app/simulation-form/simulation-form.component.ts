import { Component } from '@angular/core';
import { MontyHallService } from '../monty-hall/monty-hall.service';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css'],
})
export class SimulationFormComponent {
  numSimulations: number = 1000;
  changeDoor: boolean = true;
  isSimulating: boolean = false;
  errorMessage: string = '';
  simulationResults: any = null;

  constructor(private montyHallService: MontyHallService) { }

  startSimulation() {
    const request = {
      numSimulations: this.numSimulations,
      changeDoor: this.changeDoor,
    };

    this.montyHallService.simulateGame(request).subscribe({
      next: (result) => {
        // Handle the simulation results, e.g., update the results component
        this.isSimulating = false;
        this.simulationResults = result;
      },
      error: (error) => {
        // Handle errors
        this.isSimulating = false;
        this.errorMessage = 'An error occurred while simulating the Monty Hall game.';
      },
    });
  }
}
