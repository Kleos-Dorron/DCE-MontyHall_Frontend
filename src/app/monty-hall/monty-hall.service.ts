import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MontyHallService {
  private apiUrl = 'https://localhost:7103/api/Game/simulate';

  constructor(private http: HttpClient) { }
  simulateGame(request: any): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}
