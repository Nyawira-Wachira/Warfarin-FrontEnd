// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-reception-component',
//   templateUrl: './reception-component.component.html',
//   styleUrls: ['./reception-component.component.css']
// })
// export class ReceptionComponentComponent implements OnInit {
  // userForm : FormGroup;
  // listData : any;


  // constructor(private fb:FormBuilder) { 

  //   this.listData = [];

  //   this.userForm = this.fb.group({
  //     temperature: ['', Validators.required],
  //     blood_pressure: ['', Validators.required],
  //     height: ['', Validators.required],
  //     weight: ['', Validators.required]

  //   })
  //  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  //  public addItem() : void{
  //    this.listData.push(this.userForm.value);
  //    this.userForm.reset();
  //  }

  //  reset() {
  //   this.userForm.reset();
  //  }

  //  removeItem(element){
  //    this.listData.forEach((value,index)=>{
  //     if(value == element)
  //      this.listData.splice(index, 1);

  //    })

     
     


  //  }

  // }

  // ngOnInit(): void {
  // }






// part two
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reception-component',
  templateUrl: './reception-component.component.html',
  styleUrls: ['./reception-component.component.css']
})
export class ReceptionComponentComponent implements OnInit {

  userForm : FormGroup;
  listData : any;

  constructor(private fb:FormBuilder) {

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





 
