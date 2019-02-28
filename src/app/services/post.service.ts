import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostModel } from "../store/models/post.model";


@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getEntities(): Observable<PostModel[]> {
    console.log('getEntities()')
    return this.http.get<PostModel[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
