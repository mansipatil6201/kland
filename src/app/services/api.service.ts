import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  post(endpoint: string, body: any, paramsObj?: { [key: string]: string }) {
    let headers = new HttpHeaders();
    headers = headers.append("auth",`${environment.access_token}`);
    headers = headers.append("Content-Type", "application/json");

    let params = new HttpParams();
    if (paramsObj) {
      Object.keys(paramsObj).forEach(key => {
        params = params.set(key, paramsObj[key]);
      });
    }

    return this.http.post<any>(`${environment.base_url}/${endpoint}`, body, { headers, params });
  }

}
