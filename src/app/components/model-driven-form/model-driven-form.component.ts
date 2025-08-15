import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-driven-form.component.html',
  styleUrl: './model-driven-form.component.css'
})
export class ModelDrivenFormComponent {
  registerForm: any;

  constructor() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('sachin', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        country: new FormControl(),
        pincode: new FormControl()
      })
    })
  };

  submitMyForm() {
    console.log(this.registerForm);
  }
}
