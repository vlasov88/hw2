import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {planets} from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public planets: Planet[] = planets;

  public chosenPlanet: Planet = planets && planets[0];

}
