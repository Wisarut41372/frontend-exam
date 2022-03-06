import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private url = `${environment.serviceSpringUrl}/exam`;

  constructor(private http: HttpClient) { }

  getExams() : any{
    return this.http.get<any>(this.url);
  }

  addExam(exam: any){
    return this.http.post<any>(this.url,exam)
    .pipe(map((res)=>{
      return res;
    }));
  }

  updateExam(exam: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,exam)
    .pipe(map((res)=>{
      return res;
    }));
  }

  getExamById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  deleteExam(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl);
  }

  getExamByName(name: any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }
}
