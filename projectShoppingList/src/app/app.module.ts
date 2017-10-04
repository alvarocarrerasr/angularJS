import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
/* Main header*/
import { HeaderComponent } from './header/header.component';

/* Shopping list Components*/
import { ShoppinglComponent } from './shoppinglist/shoppingl/shoppingl.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { ShoppingComponent } from './shoppinglist/shopping.component';

/* Recipe components*/
import { RecipeComponent } from './recipe/recipe.component';
import { RecipelistComponent } from './recipe/recipelist/recipe.component';
import { RecipeitemComponent } from './recipe/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeComponent},
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    // Header
    HeaderComponent,
    // Shopping list related components
    ShoppingComponent,
    ShoppinglComponent,
    ShoppingeditComponent,
    // Recipe list related components
    RecipeComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
