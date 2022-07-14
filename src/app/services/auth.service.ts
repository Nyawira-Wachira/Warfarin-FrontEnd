import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BASE_URL } from '../utils/constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url= `${BASE_URL}api/signin/`
  profile_url=`${BASE_URL}api/profile/`


  constructor(private http:HttpClient, private router:Router)  { 
  } 
  login (usercredentials:any) :Observable<any> {
    console.log(usercredentials)
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

      console.log(token)
      this.http.get(this.profile_url,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).pipe(response => response).subscribe(res=>{
        console.log(res)
        this.saveuser(res)
        const login_status=this.getloginstatus()
        console.log(login_status)
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

    //  isadminonly(): void {
    //   const {user} = this.getuserdetails()
    //   if (user?.is_admin) {
    //     this.router.navigate(['/admin'])
    //   }
    //   else {
    //     this.router.navigate(['/'])
    //   }

    //  }

     redirecttotherightpage():void{
       const login_status=this.getloginstatus()
       const {user} = this.getuserdetails()
      
       if (user?.is_nurse){
        this.router.navigate(['/nurse'])
       }
       else if (user?.is_receptionist){
        this.router.navigate(['/reception'])
       }
       else if (user?.is_labtech){
        this.router.navigate(['/lab'])
       }
       else if (user?.is_doctor){
        this.router.navigate(['/doctor'])
       }
       else if (user?.is_admin){
        this.router.navigate(['/home'])
       }
       else {
        this.router.navigate(['/login'])
       }

     } 
     
     logout(): any {
       const localStorage = window.localStorage
       localStorage.removeItem('user')
       localStorage.removeItem('userdetails')
       this.redirecttotherightpage()
     }






















  }
