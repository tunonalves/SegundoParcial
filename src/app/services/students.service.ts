import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseURL = environment.apiURL + '/api/Student/';
  baseURL2 = environment.apiURL + '/api/Student/GetByEmail/';
  
  constructor(private http: HttpClient) { }

  getStudent():Observable<Students>{
    const url = this.baseURL;
    return this.http.get<Students>(url);
  }

  getStudent2():Promise<any>{
    const url = this.baseURL;
    return this.http.get(url).toPromise();
  }

  getByEmail(email: string): Promise<any> {
    return this.http.get(this.baseURL2 + email)
      .toPromise();
  }
}
