import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  nurse_url = `${BASE_URL}api/signup/nurse/`

  constructor(private http:HttpClient) { }

  registernurse(nursedetails): Observable<any>{
    return this.http.post(this.nurse_url,{
      ...nursedetails
    }).pipe(res=>res)
  }
}

