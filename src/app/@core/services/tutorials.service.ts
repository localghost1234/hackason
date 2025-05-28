import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Tutorial } from '../interfaces/pages.interface';

@Injectable({
  providedIn: 'root',
})
export class TutorialsService {
  private apiUrl = 'http://localhost:8080/api/tutorials';

  constructor(private http: HttpClient) {}

  getTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch tutorials:', error);
        return of([]);
      }),
    );
  }
}
