import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return Heroes;
  }
}
