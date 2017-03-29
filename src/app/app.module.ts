import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';
import { WeatherComponent } from './weather/weather.component';
import { CardComponent } from './card/card.component';
import { PlanetFilterPipe } from './pipes/planet-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DescriptionComponent,
    WeatherComponent,
    CardComponent,
    PlanetFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
