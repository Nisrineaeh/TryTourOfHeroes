import { Component } from '@angular/core';
import { Hero, Heroes } from '../hero';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title='Tour Of Heroes';
  heroes = Heroes;
}
