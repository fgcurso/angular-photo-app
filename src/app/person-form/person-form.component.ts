import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  persona: Persona = {
    nombre: null,
    apellido: null,
    email: null,
    pais: null,
    acepto: false
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('Valido:', form.valid);
  }
}

interface Persona {
  nombre: string;
  apellido: string;
  email: string;
  pais: string;
  acepto: boolean;
}