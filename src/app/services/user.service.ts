import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class UserService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/users`)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + `/users/` + id)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
