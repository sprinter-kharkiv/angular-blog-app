import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from "../../../../app.state";
import { Tutorial } from "../../../../store/models/tutorial.model";


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts;

  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
    // this.posts = http.get("https://jsonplaceholder.typicode.com/posts");
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {

  }

}
