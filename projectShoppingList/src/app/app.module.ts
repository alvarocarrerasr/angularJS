import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* Main header*/
import { HeaderComponent } from './header/header.component';

/* Shopping list Components*/
import { ShoppinglComponent } from './shoppinglist/shoppingl/shoppingl.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';

/* Recipe components*/

import { RecipelistComponent } from './recipe/recipelist/recipe.component';
import { RecipeitemComponent } from './recipe/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    // Header
    HeaderComponent,
    // Shopping list related components
    ShoppinglComponent,
    ShoppingeditComponent,
    // Recipe list related components
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
