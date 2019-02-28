import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from "./modules/features/posts/posts-list/posts-list.component";

const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    component: PostsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
