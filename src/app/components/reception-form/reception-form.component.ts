// import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormControl} from '@angular/forms';
// import { HttpClient } from '@angular/common/http'

// @Component({
//   selector: 'app-reception-form',
//   templateUrl: './reception-form.component.html',
//   styleUrls: ['./reception-form.component.css']
// })
// export class ReceptionFormComponent implements OnInit {
//   alert:boolean=false
//   addPatient= new FormGroup(
//     {
//       name: new FormControl(''),
//       email: new FormControl (''),
//       address: new FormControl(''),
//       age: new FormControl(''),
//       contacts: new FormControl('')

//     })

//   constructor() { }

//   ngOnInit(): void {
//   }
//   collectPatient(){
//     console.warn(this.addPatient.value)
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.component.html',
  styleUrls: ['./reception-form.component.css']
})
export class ReceptionFormComponent implements OnInit {

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





 