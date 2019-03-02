import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(postId): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/comments?postId=` + postId)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
