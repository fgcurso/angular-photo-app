import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidation } from './person-form-email-matcher.class';

@Component({
  selector: 'app-person-form-reactive',
  templateUrl: './person-form-reactive.component.html',
  styleUrls: ['./person-form-reactive.component.scss']
})
export class PersonFormReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  
  private createForm() {
    this.form = this.fb.group({
      nombre: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      apellido: [null, Validators.required],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      confirmEmail: [null, [
        Validators.required,
        Validators.email/*,
        EmailValidation.MatchEmailValues(this.form.get('email').value, this.form.get('confirmEmail').value)*/
      ]],
      dob: [null],
      pais: [null],
      acepto: [false, Validators.requiredTrue]
    }, {
      validator: EmailValidation.MatchEmail
    });
  }

  ngOnInit() {
  }

}
