import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Challenge } from '../interfaces/pages.interface';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  private apiUrl = 'http://localhost:8080/api/challenges'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Failed to fetch challenges:', error);
        return of([]); // Fallback empty array (or use mock data as backup)
      }),
    );
  }
}
