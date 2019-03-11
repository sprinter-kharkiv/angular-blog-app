import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlaceViewComponent } from './place-view/place-view.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PlacesListComponent,
    PlaceViewComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    MatButtonModule
  ]
})
export class PlacesModule { }
