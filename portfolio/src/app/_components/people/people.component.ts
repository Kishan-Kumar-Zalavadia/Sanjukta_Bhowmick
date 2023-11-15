import { Component } from '@angular/core';
import { PEOPLE } from '../../_model/people-data';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  people = PEOPLE;
}
