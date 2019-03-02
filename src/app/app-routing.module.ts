import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from "./modules/features/posts/posts-list/posts-list.component";
import { PostViewComponent } from "./modules/features/post-view/post-view.component";
import { HomeComponent } from "./modules/features/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts/:id',
    component: PostsListComponent,
  },
  {
    path: 'post/:id',
    component: PostViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
