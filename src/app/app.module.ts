import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./modules/core/header/header.component";
import { PostsListComponent } from './modules/features/posts/posts-list/posts-list.component';
import { HttpClient } from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from "./store/reducers/index";

import { CreateComponent } from './modules/features/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({tutorial: reducer}),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
