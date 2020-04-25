import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  
  onIntervalStarted(startingNumber: number) {
    if (startingNumber % 2 === 0) {
      this.evenNumbers.push(startingNumber);
    } else {
      this.oddNumbers.push(startingNumber);
    }
  }
  constructor() {

  }

}
