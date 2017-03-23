import {Component, Input} from '@angular/core';
import {place} from "../place";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  @Input()
  public place: place;

}
