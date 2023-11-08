import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MontyHall_Frontend';
  totalSimulations: number = 0;
  wins: number = 0;
  losses: number = 0;
}
