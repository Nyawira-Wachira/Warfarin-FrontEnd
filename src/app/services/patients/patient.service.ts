import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/utils/constants';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  patient_url = `${BASE_URL}api/create/patient/`
  all_patients_url = `${BASE_URL}api/patient/all/`

  constructor(private http:HttpClient, private auth:AuthService) { }

  registerpatient(patientdetails): Observable<any>{
    const {token} = this.auth.getuserdetails()
    return this.http.post(this.patient_url,{
      ...patientdetails
    },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).pipe(res=>res)
  }

  getpatients(): Observable<any>{
    const {token} = this.auth.getuserdetails()
    return this.http.get(this.all_patients_url,{
      headers:{
        Authorization:`Bearer ${token}`
      }

    }).pipe(res=>res)
  }
}
