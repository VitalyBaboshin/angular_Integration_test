import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = 0;

  constructor() {}

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}


