import { NgModule } from '@angular/core';

import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";

import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LoginRoutingModule,
    MatFormFieldModule,
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule {
}
