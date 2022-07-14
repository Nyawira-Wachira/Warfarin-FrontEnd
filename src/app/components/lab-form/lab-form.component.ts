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
  patient :any = {
    inr_range: ""
  }

  constructor(private fb:FormBuilder, private patientservice:PatientService) { 

    this.listData = [];

    this.userForm = this.fb.group({
      inr_range: ['', Validators.required],

    })

  }

  public addItem() : void{
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
  update_patient():void{
    this.patient.diagnosis="not diagnosed"
    this.patientservice.update_patient(this.patient,this.patient.id).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })
  }

  getnumber(option:any):any {
    return parseFloat(option)|| 0
  }

}










  