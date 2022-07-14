import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {


  userForm : FormGroup;
  listData : any;
  patient:any = {
    temparature:"",
    bp: "",
    height: "",
    weight: ""
  }

  constructor(private fb:FormBuilder ,private patientservice:PatientService) {

    this.listData = [];

    this.userForm = this.fb.group({
      temparature: ['', Validators.required],
      bp: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required]

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

  //  update/patient/{`id`}/

  update(patient_):void {
    this.patient=null
    this.patient=patient_
    console.log(patient_)

  }
  update_patient():void{
    this.patient.diagnosis="not diagnosed"
    this.patient.inr_range="no range"
    this.patientservice.update_patient(this.patient,this.patient.id).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })
  }

  getnumber(option:any):number {
    return parseFloat(option)|| 0
  }


}
