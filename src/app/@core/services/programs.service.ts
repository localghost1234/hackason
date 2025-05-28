import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Program } from '../interfaces/pages.interface';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  private apiUrl = 'http://localhost:8080/api/programs'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch programs:', error);
        return of([]);
      }),
    );
  }
}
