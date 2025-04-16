import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../models/stage.model';

@Injectable({
  providedIn: 'root',
})
export class StageService {
  private apiUrl = 'http://localhost:3000/stages';

  constructor(private http: HttpClient) {}

  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl);
  }

  addStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.apiUrl, stage);
  }

  deleteStage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getStageById(id: string): Observable<Stage> {
    return this.http.get<Stage>(`http://localhost:3000/stages/${id}`);
  }
  
}
