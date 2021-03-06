import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostModel } from "../store/models/post.model";


@Injectable()
export class PostService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getEntities(id): Observable<PostModel[]> {
    let url;
    if (id) {
      url = this.baseUrl + '/posts?userId=' + id;
    }else {
      url =  this.baseUrl + '/posts';
    }


    return this.http.get<PostModel[]>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getEntity(id): Observable<PostModel> {
    return this.http.get<PostModel>(this.baseUrl + `/posts/` + id)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
