import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/reducers';
import * as postSelectors from '../../../../store/selectors/post.selector';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts;
  tutorials;
  // tutorials: Observable<State>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    // this.tutorials = store.select('tutorial');
    // this.posts = http.get("https://jsonplaceholder.typicode.com/posts");
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.store.select(state => state.post).subscribe((data) => {
      this.posts = postSelectors.getEntities(data);
      console.log('POSTS', this.posts)
    });
  }

}
