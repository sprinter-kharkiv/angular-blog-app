import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from "./default-layout/default-layout.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'places',
        loadChildren: './places/places.module#PlacesModule',
        data: { preload: false },
      },
      {
        path: 'events',
        loadChildren: './events/events.module#EventsModule',
        data: { preload: false },
      },
      {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule',
        data: { preload: false },
      },
      {
        path: 'services',
        loadChildren: './services/services.module#ServicesModule',
        data: { preload: false },
      },
      {
        path: 'hotels',
        loadChildren: './hotels/hotels.module#HotelsModule',
        data: { preload: false },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
