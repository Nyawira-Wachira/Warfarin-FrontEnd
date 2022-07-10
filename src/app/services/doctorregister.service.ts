import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class DoctorregisterService {

  doctor_url = `${BASE_URL}api/signup/doctor/`

  constructor(private http:HttpClient) { }

  registerdoctor(doctordetails): Observable<any>{
    return this.http.post(this.doctor_url, {
      ...doctordetails
    }).pipe(res=>res)
  }
}
