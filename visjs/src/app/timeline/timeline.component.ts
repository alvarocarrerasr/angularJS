import { Component, OnInit, Output, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as vis from 'vis';

import { Tarea } from './../tarea.model';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: [
    './timeline.component.css'
  ]
})
export class TimelineComponent implements OnInit, AfterViewInit {

  @Input() tasksChild = [];
  @ViewChild('timeGraph') timeGraph;
  dataset = new vis.DataSet();

  constructor() {
    this.generateDataToShow();
  }

  ngAfterViewInit() {
    const options = {};
    const container = this.timeGraph.nativeElement;
    const timeline = new vis.Timeline(container, this.dataset, options);
    console.log(this.timeGraph);
  }

  onRefresh() {
    this.generateDataToShow();
  }

  ngOnInit() {
  }
  generateDataToShow() {
    let newObject: Object;
    for (let i = 0 ; i < this.tasksChild.length; i++) {
      newObject = {
        id : i,
        content : i.toString(),
        start: this.tasksChild[i].start,
        end: this.tasksChild[i].end
      };
      this.dataset.update(newObject);
    }
  }



}
