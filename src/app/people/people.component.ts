import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input("person") person: string = "none"
  @Output("favourite") favourite = new EventEmitter<string>()

  makeFavourite() {
    this.favourite.emit(this.person)
  }

}
