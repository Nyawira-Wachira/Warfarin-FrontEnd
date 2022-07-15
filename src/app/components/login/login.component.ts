import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = ''
  password :string = ''

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.redirecttotherightpage()

  }
  login(){
    this.authService.login({
      email:this.email,
      password:this.password
    }).subscribe(response=>{
      console.log("login",response)
   
      if (response.success===true){
        this.authService.saveuserdetails(response)
        this.authService.fetchuser(response.token)

      }
    })
  }

}
