import { Component, OnInit } from '@angular/core';
import { LabregisterService } from 'src/app/services/labregister.service';

@Component({
  selector: 'app-labtechregister',
  templateUrl: './labtechregister.component.html',
  styleUrls: ['./labtechregister.component.css']
})
export class LabtechregisterComponent implements OnInit {

  name:string =''
  email:string =''
  password:string=''
  confirm_password:string=''
  username:string= ''

  constructor(private labregisterservice:LabregisterService) { }

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
      this.labregisterservice.registerlabtech({
        name:this.name, 
        email: this.email,
        password:this.password,
        profile:{
          username:this.username
        }
      }).subscribe(res=>{
        if (res.status=== 200){
          alert('Lab Tech Created Successfully')
        }
      })
    }

  }

}
