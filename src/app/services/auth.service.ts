import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url= 'https://solutionmakersapi.herokuapp.com/api/signin/'
  profile_url='https://solutionmakersapi.herokuapp.com/api/profile/'


  constructor(private http:HttpClient, private router:Router)  { 
  } 
  login (usercredentials:any) :Observable<any> {
    return this.http.post(this.login_url,{
     ...usercredentials
    }).pipe(response => response)
  }

  saveuser(usercredentials:any):void{
    const localstorage=window.localStorage
    localstorage.setItem('user',JSON.stringify(usercredentials))
  }

  saveuserdetails(usercredentials:any):void{
    const localstorage=window.localStorage
    localstorage.setItem('userdetails',JSON.stringify(usercredentials))

  }
  fetchuser(token:any){

      console.log(token)
      this.http.get(this.profile_url,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).pipe(response => response).subscribe(res=>{
        console.log(res)
        this.saveuser(res)
        const login_status=this.getloginstatus()
        if (login_status){
          this.redirecttotherightpage()
        }
      })

     }

     getloginstatus():boolean{
       const user=window.localStorage.getItem('user')
       const userdetails=window.localStorage.getItem('userdetails')
       if (user&&userdetails){
        //  this.router.navigate(['/'])
         return true
       }
       else {
         return false
       }
     }

     getuserdetails():any{
      const user_=window.localStorage.getItem('user')
      const user=JSON.parse(user_ || '{}')
      const userdetails_=window.localStorage.getItem('userdetails')
      const userdetails=JSON.parse(userdetails_ || '{}')
      return{
        ...user,...userdetails
      }

     }

     redirecttotherightpage():void{
       const login_status=this.getloginstatus()
       const user = this.getuserdetails()
       if (user.is_nurse){
        this.router.navigate(['/nurse'])
       }
       if (user.is_receptionist){
        this.router.navigate(['/register'])
       }
           
     }

















  }
