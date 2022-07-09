import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  url: string = 'http://127.0.0.1:8000'
rooturl="http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }
  getList()
  {
    return this.http.get(this.url);
  }
  savePatient(data)
  {
    return this.http.post(this.url,data)
  }
  deletePatient(id)
  {
    return this.http.delete('${this.url}/${id}')
  }
  getCurrentPatient(id)
  {
    return this.http.get('${this.url}/${id}')
  }
  updatePatient(id)
  {
    // return this.http.put('${this.url}/${id}',data)
  }

}
