import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = `${environment.serviceSpringUrl}/exam`;

  constructor(private http: HttpClient) { }

  getQuestion() : any{
    return this.http.get<any>(this.url);
  }

}
