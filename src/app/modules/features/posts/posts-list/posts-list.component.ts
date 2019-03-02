import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/reducers';
import * as postSelectors from '../../../../store/selectors/post.selector';
import { PostModel } from "../../../../store/models/post.model";
import { HttpClient } from "@angular/common/http";
import { PostService } from "../../../../services/post.service";
import { UserService } from "../../../../services/user.service";
import { CommentService } from "../../../../services/comment.service";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: PostModel[] = [];
  users = [];
  userObj = {
    usersID: []
  };
  comments = {};

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private http: HttpClient,
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
  ) {  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getUsers();
      if (params['id'] === 'all' ) {
        this.getPosts();
      } else {
        this.getPosts(params['id']);
      }
    });

  }

  getUsers() {
    this.userService.getAllUsers()
      .subscribe(
        (resp: PostModel[])  => {
          this.users = resp;
          this.prepareUsers();
        }
      );
  }


  getPosts(userId = null) {
    this.postService.getEntities(userId)
      .subscribe(
        (resp: PostModel[])  => {
          this.posts = resp;
          this.getComments();
        }
      );

    // this.store.select(state => state.post).subscribe((data) => {
    //   this.posts = postSelectors.getEntities(data);
    //   console.log('POSTS', this.posts)
    // });
  }

  prepareUsers() {
    for(const user of this.users) {
      this.userObj[user.id] = {
        name: user.name,
        mail: user.email
      };
      this.userObj.usersID.push(user.id)
    }
  }

  getComments() {
    for (const post of this.posts) {
      this.commentService.getComments(post.id)
        .subscribe(
          (resp: PostModel[])  => {
            this.comments[post.id] = resp;
          }
        );
    }
  }
}
