import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {
  userForm : FormGroup;
  listData : any;
  patient:any;

  constructor(private fb:FormBuilder, private patientservice:PatientService) { 

    this.listData = [];

    this.userForm = this.fb.group({
      inr_range: ['', Validators.required],

    })

  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
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
      console.log(res)
    })
  }

  update(patient_):void {
    this.patient=null
    this.patient=patient_
    console.log(patient_)

  }

  getnumber(option:any):number {
    return parseFloat(option)|| 0
  }

}










  