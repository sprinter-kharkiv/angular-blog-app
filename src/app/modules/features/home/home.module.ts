import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NavigationComponent } from "../../core/navigation/navigation.component";


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    NavigationComponent,
  ],
  imports: [
    HomeRoutingModule,
  ]
})
export class HomeModule { }
