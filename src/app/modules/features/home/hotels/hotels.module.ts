import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { HotelsComponent } from "./hotels.component";

@NgModule({
  declarations: [
    HotelsComponent,
    HotelsListComponent,
    HotelProfileComponent,
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
