import {Component, Input, Output, EventEmitter} from '@angular/core';
import {place} from "../place";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input()
  public list: place[];

  @Output()
  public chosen: EventEmitter<place> = new EventEmitter();

  public chosenPlace: place;

  public choose(chosen: place) {
    this.chosenPlace = chosen;
    this.chosen.emit(chosen)
  }

}
