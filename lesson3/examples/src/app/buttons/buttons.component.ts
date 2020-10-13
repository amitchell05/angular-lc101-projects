import { findStaticQueryIds } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   inactive: boolean[] = [this.goldInactive, this.silverInactive, this.copperInactive];

   constructor() { }

   ngOnInit() { }

   reactivate() {
      for (let i = 0; i < this.inactive.length; i++) {
         this.inactive[i] = false;
      }
      return this.inactive;
   }

}
