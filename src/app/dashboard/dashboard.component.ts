import { Component } from '@angular/core';
import { Heroes } from '../hero';
import { Hero } from '../hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title="Top Heroes";
  heroes = [...Heroes];

  selectedHero: Hero | null = null;

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
