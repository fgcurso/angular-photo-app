import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  person: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPerson().subscribe(data => {
      this.person = data;
    });
  }

}
