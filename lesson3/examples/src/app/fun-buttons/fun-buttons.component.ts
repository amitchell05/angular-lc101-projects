import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fun-buttons',
  templateUrl: './fun-buttons.component.html',
  styleUrls: ['./fun-buttons.component.css']
})
export class FunButtonsComponent implements OnInit {
  buttonHeading: string = "Joke Buttons";
  inactive: boolean = false;
  location: string = 'center';

  constructor() { }

  ngOnInit() {
  }

  shiftLocation(oldLocation: string) {
    while (this.location === oldLocation) {
      this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
    }
    return this.location;
  }

}
