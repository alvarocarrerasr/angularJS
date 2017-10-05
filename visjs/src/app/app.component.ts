
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormAddComponent } from './form-add/form-add.component';
import { Tarea } from './tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  title = 'app';
  @Output() tasks: Tarea [];


  constructor() {
    this.tasks = [];
    console.log('From parent');
  }
  onEvent(event: Tarea) {
    console.log('event', event);
    this.tasks.push(event);
  }

}
