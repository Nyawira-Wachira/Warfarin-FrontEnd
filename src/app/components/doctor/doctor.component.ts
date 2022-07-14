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
  inr : any;
  patient : any = {
    currency_dose: ""
  }

  constructor(private fb:FormBuilder , private patientservice:PatientService) { 
    this.listData = [];

    this.userForm = this.fb.group({
      currency_dose: ['', Validators.required]
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

  update_patient():void{
    this.patient.diagnosis="not diagnosed"
    this.patientservice.update_patient(this.patient,this.patient.id).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })
  }

  getnumber(option:any):number {
    return parseFloat(option)|| 0
  }

  getRemedy(): void {
    console.log(this.inr)
    this.patientservice.getRemedy(this.patient.inr_range, this.inr).subscribe(res=>{
      if (res.error){
        
      }
      else {
        if (res.length>0 ){
          const message = `${res[0].remedy}. ${res[0].return_to_clinc}`
          this.patient.diagnosis=message
          this.patientservice.update_patient(this.patient,this.patient.id).subscribe(res=>{
            this.ngOnInit()
          })
        }
      }
    })
  }

  setinr(INR: any){
    this.inr=INR
  }

}
