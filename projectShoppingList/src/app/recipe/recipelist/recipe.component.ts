import {Component} from '@angular/core';
import { Recipe } from './../recipe.model';

@Component(
    {
        selector: 'app-recipelist',
        templateUrl: './recipe.component.html',
        styleUrls: [
            './recipe.component.css'
        ]
    }
)
export class RecipelistComponent {
    recipes: Recipe[] = [
        new Recipe('Spanish Potato Omellete',
     'Una rica tortilla de patatas' ,
     '/assets/spanishomellete.jpg')
    ];
}
