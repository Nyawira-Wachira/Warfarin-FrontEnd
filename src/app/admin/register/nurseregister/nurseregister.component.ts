import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-nurseregister',
  templateUrl: './nurseregister.component.html',
  styleUrls: ['./nurseregister.component.css']
})
export class NurseregisterComponent implements OnInit {


  email:string =''
  password:string=''
  confirm_password:string=''
  full_name:string= ''

  constructor(private registerservice:RegistrationService) { }

  ngOnInit(): void {   
  }

  register(): any {
    if(this.password !== this.confirm_password){
      alert('Passwords do not match')
      
    }

    else if (this.email === '' || this.full_name === ''){
      alert ('Please fill in all the fields')
    }

    else {
      this.registerservice.registernurse({
        email: this.email,
        password:this.password,
        profile:{
          full_name:this.full_name
        }
      }).subscribe(res=>{
        if (res.status=== 200){
          alert('Nurse Created Successfully')
        }
      })
    }

  }


}
