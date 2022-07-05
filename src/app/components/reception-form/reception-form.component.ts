import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.component.html',
  styleUrls: ['./reception-form.component.css']
})
export class ReceptionFormComponent implements OnInit {
  alert:boolean=false
  addPatient= new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl (''),
      address: new FormControl(''),
      age: new FormControl(''),
      contacts: new FormControl('')

    })

  constructor() { }

  ngOnInit(): void {
  }
  collectPatient(){
    console.warn(this.addPatient.value)
  }

}
