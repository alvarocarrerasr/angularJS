import { Component, OnInit } from '@angular/core';
import { HeaderController } from './header.controller';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRecipesClick() {
    HeaderController.getInstance().setModule('recipes');
  }
  onIngredientsClick() {
    HeaderController.getInstance().setModule('ingredients');
  }
}
