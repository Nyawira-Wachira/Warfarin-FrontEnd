import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-Reception-Component',
  templateUrl: './reception-component.component.html',
  styleUrls: ['./reception-component.component.css']
})
export class ReceptionComponentComponent implements OnInit {
 
  userForm : FormGroup;
  listData : any;

  constructor(private fb:FormBuilder, private patientservice:PatientService) {

    this.listData = [];

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      residence: ['', Validators.required],
      email: ['', Validators.required],
      contacts: ['', Validators.required],
      gender: ['', Validators.required]
    

    })
  }

   public addItem() : void{
     this.listData.push(this.userForm.value);
     this.userForm.reset();
     console.log(this.listData)
     this.patientservice.registerpatient(this.listData[0]).subscribe(res=>{
       console.log(res)
     })
   }

  reset() {
    this.userForm.reset();
  }

  removeItem(element){
      this.listData.forEach((value,index)=>{
        if(value == element)
        this.listData.splice(index, 1);

    })

  }

  ngOnInit(): void {

    this.patientservice.getpatients().subscribe(res=>{
      this.listData=res?res:[]
    })
  }



}
