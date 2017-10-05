import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from './../tarea.model';
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],

})
export class FormAddComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<Tarea>();
  formData = {
    name: 'f',
    start: '2017-10-05',
    end: '2017-10-06'
  };
  constructor() { }

  ngOnInit() {
  }

  onNewTask() {
    const newTask = new Tarea(this.formData.name, this.formData.start, this.formData.end);
    console.log('fromchild', newTask);
    this.eventEmitter.emit(newTask);

  }

}
