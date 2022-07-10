import { Component, OnInit } from '@angular/core';
import { DoctorregisterService } from 'src/app/services/doctorregister.service';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  name:string =''
  email:string =''
  password:string=''
  confirm_password:string=''
  username:string= ''

  constructor(private doctorregisterservice:DoctorregisterService) { }

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
      this.doctorregisterservice.registerdoctor({
        name:this.name, 
        email: this.email,
        password:this.password,
        profile:{
          username:this.username
        }
      }).subscribe(res=>{
        if (res.status=== 200){
          alert('Doctor Created Successfully')
        }
      })
    }

  }

}
