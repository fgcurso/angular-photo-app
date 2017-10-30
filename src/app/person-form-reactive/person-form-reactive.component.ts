import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidation } from './person-form-email-matcher.class';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form-reactive',
  templateUrl: './person-form-reactive.component.html',
  styleUrls: ['./person-form-reactive.component.scss']
})
export class PersonFormReactiveComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private personService: PersonService) {
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

  onSubmit() {
    // se puede hacer mejor!
    this.personService.savePerson(this.form.value);
  }

  ngOnInit() {
  }

}
