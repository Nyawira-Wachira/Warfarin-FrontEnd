import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ReceptionregisterService {
  
  reception_url = `${BASE_URL}api/signup/reception/`

  constructor(private http:HttpClient) { }

  registerreceptionist(receptionistdetails): Observable<any>{
    return this.http.post(this.reception_url,{
      ...receptionistdetails
    }).pipe(res=>res)
  }
}
