import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../ingredient.model';

@Component({
  selector: 'app-shoppingl',
  templateUrl: './shoppingl.component.html',
  styleUrls: ['./shoppingl.component.css']
})
export class ShoppinglComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Potato'),
    new Ingredient('Onion')
  ];
  constructor() { }

  ngOnInit() {
  }

}
