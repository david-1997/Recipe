import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {
    path:"",
    component:SearchComponent
  },
  {
    path:"results",
    component:ResultsComponent
  },
  {
    path:"recipe/:id",
    component:RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
