import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patients/patient.service';

@Component({
  selector: 'app-Reception-Component',
  templateUrl: './reception-component.component.html',
  styleUrls: ['./reception-component.component.css']
})
export class ReceptionComponentComponent implements OnInit {
 
  form : FormGroup;
  listData : any;
  patientData : any;


  constructor(private fb:FormBuilder, private patientservice:PatientService) {

    // this.listData = [];
    this.patientData = [];


    this.form = this.fb.group({
      full_name: ['', Validators.required],
      age: ['', Validators.required],
      residence: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      gender: ['', Validators.required]
    

    })
  }

  // addItem(){
  //   var formData: any = new FormData();
  //   formData.append("full_name", this.form.get('full_name')!.value);
  //   console.log(formData)
  //   this.patientservice.registerpatient(formData).subscribe(res=>{
  //          console.log(res)
  //        })
  // }

   public addItem() : void{
     this.listData.append(this.form.value);
    //  this.form.reset();
     console.log('Testing input')
     console.log(this.listData)
     this.patientservice.registerpatient(this.listData).subscribe(res=>{
       console.log(res)
     })
   }

  reset() {
    this.form.reset();
  }

  removeItem(element){
      this.listData.forEach((value,index)=>{
        if(value == element)
        this.listData.splice(index, 1);

    })

  }

  ngOnInit(): void {

    this.patientservice.getpatients().subscribe(res=>{
      this.patientData=res?res:[]
    })
  }



}
