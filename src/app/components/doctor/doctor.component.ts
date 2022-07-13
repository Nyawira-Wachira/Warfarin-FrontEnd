import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  userForm : FormGroup;
  listData : any;
  patient : any;

  constructor(private fb:FormBuilder , private patientservice:PatientService) { 
    this.listData = [];

    this.userForm = this.fb.group({
      current_dose: ['', Validators.required]
    })
  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
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
