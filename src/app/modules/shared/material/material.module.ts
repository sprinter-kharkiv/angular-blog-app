import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ]
})
export class MaterialModule { }
