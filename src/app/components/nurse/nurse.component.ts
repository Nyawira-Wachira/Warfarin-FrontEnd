import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  userForm : FormGroup;
  listData : any;

  constructor(private fb:FormBuilder) {

    this.listData = [];

    this.userForm = this.fb.group({
      temperature: ['', Validators.required],
      blood_pressure: ['', Validators.required],
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
  }

}
