import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./modules/core/header/header.component";
import { PostsListComponent } from './modules/features/posts/posts-list/posts-list.component';
// import { HttpClient } from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from "./store/reducers/index";

import { CreateComponent } from './modules/features/create/create.component';
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./services/post.service";
import { UserService } from "./services/user.service";
import { CommentService } from "./services/comment.service";
import { PostViewComponent } from './modules/features/post-view/post-view.component';
import { HomeComponent } from './modules/features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsListComponent,
    CreateComponent,
    PostViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({tutorial: reducer}),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [
    PostService,
    UserService,
    CommentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
