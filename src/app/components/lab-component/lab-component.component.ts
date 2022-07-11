import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-component',
  templateUrl: './lab-component.component.html',
  styleUrls: ['./lab-component.component.css']
})
export class LabComponentComponent implements OnInit {

    userForm: FormGroup

  constructor(private fb:FormBuilder) { 
    this.userForm = this.fb.group({

      INR :['', Validators.required],  
    })
  }

  ngOnInit(): void {
  }

}
