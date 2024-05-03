import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../courses/model/course';
import { delay, first, take, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly url = "assets/courses.json"

  constructor( private httpClient : HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(`${this.url}`).pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses)))
  }
}
