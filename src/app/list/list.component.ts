import {Component, EventEmitter, Input, Output, } from '@angular/core';
import {PlanetFilterMode} from '../pipes/planet-filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public filterModes: typeof PlanetFilterMode = PlanetFilterMode;
  public filtermode: PlanetFilterMode;

  public _list: Planet[];

  @Input()
  public set list(list: Planet[]) {
    this._list = list;
    this.chosenPlanet = list && list[0];
  }

  public get list(): Planet[] {
    return this._list;
  }

  @Output()
  public chosen: EventEmitter<Planet> = new EventEmitter();

  public chosenPlanet: Planet;

  public choose(chosen: Planet): void {
    this.chosenPlanet = chosen;
    this.chosen.emit(chosen);
  }

  public setFilterMode(mode: PlanetFilterMode) {
     this.filtermode = mode;
  }

}
