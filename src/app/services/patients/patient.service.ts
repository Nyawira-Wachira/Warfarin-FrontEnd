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
  delete_patient_url = `${BASE_URL}api/delete/patient/`
  all_patients_url = `${BASE_URL}api/patient/all/`
  update_patient_url = `${BASE_URL}api/update/patient/`
  remedy_url = (INR,range)=>`${BASE_URL}api/getpatient/remedy/?inr_range=${range}&inr_protocol=${INR}`

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

  update_patient(patientdetails,id): Observable<any>{
    const {token} = this.auth.getuserdetails()
    return this.http.put(this.update_patient_url+id+"/",{
      ...patientdetails
    },{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).pipe(res=>res)
  }

  delete_patient(id:any): Observable<any>{
    const {token} = this.auth.getuserdetails()
    return this.http.delete(this.delete_patient_url+id+"/",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).pipe(res=>res)
  }

  getRemedy(inr:string, range:any): Observable<any>{
    const url = this.remedy_url(range,inr)
    console.log(url)
    const {token} = this.auth.getuserdetails()
    return this.http.get(url,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).pipe(res=>res)
  }

}
