import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesListComponent } from "./places-list/places-list.component";

const routes: Routes = [
  {
    path: '',
    component: PlacesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
