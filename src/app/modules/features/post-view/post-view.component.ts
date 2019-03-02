import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../../services/post.service";
import { PostModel } from "../../../store/models/post.model";
import { CommentService } from "../../../services/comment.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})

export class PostViewComponent implements OnInit {

  post = {
    id: null,
    userId: null,
    userDetail: null,
    title: null,
    body: null,
    comments: null
  };
  users = [];
  userObj = {
    usersID: []
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUsers();
      this.post.id = params['id'];
      this.addPost();
      this.addComments();
    });
  }

  addPost() {
    this.postService.getEntity(this.post.id)
      .subscribe(
        (resp: PostModel) => {
          this.post.title = resp.title;
          this.post.body = resp.body;
          this.post.userId = resp.userId;
          this.addUserDetail();
        }
      );
  }

  addComments() {
    this.commentService.getComments(this.post.id)
      .subscribe(
        (resp) => {
          this.post.comments = resp;
        }
      );
  }

  addUserDetail() {
    this.userService.getUser(this.post.userId)
      .subscribe(
        (resp) => {
          this.post.userDetail = resp;
        }
      );
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

  prepareUsers() {
    for(const user of this.users) {
      this.userObj[user.id] = {
        name: user.name,
        mail: user.email
      };
      this.userObj.usersID.push(user.id)
    }
  }

}
