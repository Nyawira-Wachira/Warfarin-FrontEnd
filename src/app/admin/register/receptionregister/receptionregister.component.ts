import { Component, OnInit } from '@angular/core';
import { ReceptionregisterService } from 'src/app/services/receptionregister.service';

@Component({
  selector: 'app-receptionregister',
  templateUrl: './receptionregister.component.html',
  styleUrls: ['./receptionregister.component.css']
})
export class ReceptionregisterComponent implements OnInit {

  name:string =''
  email:string =''
  password:string=''
  confirm_password:string=''
  username:string= ''

  constructor(private receptionregisterservice:ReceptionregisterService) { }

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
      this.receptionregisterservice.registerreceptionist({
        name:this.name, 
        email: this.email,
        password:this.password,
        profile:{
          username:this.username
        }
      }).subscribe(res=>{
        if (res.status=== 200){
          alert('Receptionist Created Successfully')
        }
      })
    }

  }

}
