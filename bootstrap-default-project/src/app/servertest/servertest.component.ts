import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servertest',
  templateUrl: './servertest.component.html',
  styleUrls: ['./servertest.component.css']
})
export class ServertestComponent implements OnInit {
  name = 'Alvaro';
  age = 21;
  disableButton = false;
  hasClicked = false;
  constructor() { }

  ngOnInit() {
  }
  onClickIfYouCanClicked = function(){
    this.hasClicked = true;
  };


}
