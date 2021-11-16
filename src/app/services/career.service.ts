import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Career } from '../models/careers';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  baseURL = environment.apiURL + '/api/Career';

  constructor(private http: HttpClient) { }

  getcareer():Observable<Career>{
    const url = this.baseURL;
    return this.http.get<Career>(url);
  }

  getcareer2():Promise<any>{
    const url = this.baseURL;
    return this.http.get(url).toPromise();
  }
}
