import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class LabregisterService {

  lab_url = `${BASE_URL}api/signup/labtech/`

  constructor(private http:HttpClient) { }


  registerlabtech(labtechdetails): Observable<any> {
    return this.http.post(this.lab_url,{
      ...labtechdetails
    }).pipe(res=>res)

  }
}
