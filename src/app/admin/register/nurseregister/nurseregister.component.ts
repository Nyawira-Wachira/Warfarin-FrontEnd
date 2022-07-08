import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-nurseregister',
  templateUrl: './nurseregister.component.html',
  styleUrls: ['./nurseregister.component.css']
})
export class NurseregisterComponent implements OnInit {

  name:string =''
  email:string =''
  password:string=''
  confirm_password:string=''
  username:string= ''

  constructor(private registerservice:RegistrationService) { }

  ngOnInit(): void {   
  }

  register(): any {
    if(this.password !== this.confirm_password){
      alert('Passwords do not match')
      
    }

    else if (this.name === '' || this.email === '' || this.username === ''){
      alert ('Please fill in all the fields')
    }

    else {
      this.registerservice.registernurse({
        name:this.name, 
        email: this.email,
        password:this.password,
        profile:{
          username:this.username
        }
      }).subscribe(res=>{
        if (res.status=== 200){
          alert('Nurse Created Successfully')
        }
      })
    }

  }


}
