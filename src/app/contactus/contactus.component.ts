import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 
  protected  pagewelcomeMesage : string = "Welcome to core knowledge sharing";
  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    name:new FormControl<string>(''),
    email: new FormControl<string>(''),
    message: new FormControl(''),
    number: new FormControl<number>(0)
  });
  contactFormUntyped = new UntypedFormGroup({
    name:new UntypedFormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    number: new FormControl()
  });

  Submit(){ 
    console.log(this.contactForm.value);
    console.log(this.contactForm.value.email?.length); //check the null value
    console.log(this.contactForm.value.email!.length); //If you are sure value is not null
    console.log(this.contactFormUntyped.value.name.length); // throw error in browser
  }

}
