import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  leftEnabled: boolean = true;
  rightEnabled: boolean = true;
  downEnabled: boolean = true;
  upEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }

  handleLanding(rocketImage) {
    let result = window.confirm('The shuttle is landing. Landing gear engaged.');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  handleMissionAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.width < 470000) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.color = 'blue';
      this.leftEnabled = true;
    } else if (direction === 'left' && this.width > -20000) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.color = 'blue';
      this.rightEnabled = true;
    } else if (direction === 'up' && this.height < 340000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.color = 'blue';
      this.downEnabled = true;
    } else if (direction === 'down' && this.height > 0) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.color = 'blue';
      this.upEnabled = true;
    }
  }

  handleOutOfBounds(direction) {
    if (this.width <= -20000 || this.width >= 470000) {
      this.color = 'orange';
      if (direction === 'left') {
        this.leftEnabled = false;
      } else if (direction === 'right') {
        this.rightEnabled = false;
      }
    } else if (this.height === 0 || this.height >= 340000) {
      this.color = 'orange';
      if (direction === 'down') {
        this.downEnabled = false;
      } else if (direction === 'up') {
        this.upEnabled = false;
      }
    }
  }
}
