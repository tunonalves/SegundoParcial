import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  baseURL = environment.apiURL + '/api/Student';

  constructor(private http: HttpClient) { }


  getSubjects():Promise<any>{
    const url = this.baseURL;
    return this.http.get(url).toPromise();
  }

}
