import { Component } from '@angular/core';
import {place} from "./place";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public places: place[];

  public chosenPlace: place;

  constructor() {
    this.places = [
      {
        address: "Sed perspiciatis",
        tel: "+1285 968 685",
        img: "./assets/images/1.jpg",
        imgSmall: "./assets/images/r1.jpg",
        followers: 10,
        following: 10,
        temperature: 10
      },
      {
        address: "Sed ut perspiciatis",
        tel: "+1285 968 685",
        img: "./assets/images/b1.jpg",
        imgSmall: "./assets/images/res.jpg",
        followers: 20,
        following: 20,
        temperature: 20,
      },
      {
        address: "Sed ut perspiciatis",
        tel: "+1285 968 685",
        img: "./assets/images/1.jpg",
        imgSmall: "./assets/images/r1.jpg",
        followers: 30,
        following: 30,
        temperature: 30
      }
  ];
    this.chosenPlace = this.places[0];

  }


}
