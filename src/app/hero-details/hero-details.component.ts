import { Component } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  hero: Hero | undefined;
  heroes = [...Heroes];
  selectedHero: Hero | null = null;

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}


