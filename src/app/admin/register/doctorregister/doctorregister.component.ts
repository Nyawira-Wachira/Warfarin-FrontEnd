import { Component, OnInit } from '@angular/core';
import { DoctorregisterService } from 'src/app/services/doctorregister.service';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  email:string =''
  password:string=''
  confirm_password:string=''
  full_name:string= ''

  constructor(private doctorregisterservice:DoctorregisterService) { }

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
      this.doctorregisterservice.registerdoctor({
        email: this.email,
        password:this.password,
        profile:{
          full_name:this.full_name
        }
      }).subscribe(res=>{
        if (res.status=== 200){
          alert('Doctor Created Successfully')
        }
      })
    }

  }

}
