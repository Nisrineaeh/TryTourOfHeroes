import { Component } from '@angular/core';
import { Heroes } from '../hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title="Top Heroes";
  heroes = [...Heroes];
}
