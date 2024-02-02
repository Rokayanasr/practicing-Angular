import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    //first_name: new FormControl('ahmed')  ---> ahmed is the default value
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.min(16),
      Validators.max(80),
      Validators.required,
    ]),
    email: new FormControl(null, [
      Validators.email,
      Validators.required]),
    password: new FormControl(null, [
      Validators.pattern(/^[A-Z]/),
      Validators.required,
    ]),
  });


  submitRegisterForm(registerForm:FormGroup){
    console.log(registerForm.get('first_name')?.errors);
  }
}
