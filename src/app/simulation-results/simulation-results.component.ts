import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simulation-results',
  templateUrl: './simulation-results.component.html',
  styleUrls: ['./simulation-results.component.css']
})
export class SimulationResultsComponent {
  @Input() totalSimulations: number = 0;
  @Input() wins: number = 0;
  @Input() losses: number = 0;
}
