import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id;
  sub;
  recipe;
  rec;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']
      });
      this.recipeService.getRecipe(this.id).subscribe((data) => {
        this.recipe=data;
        console.log(this.recipe[0]);
        this.rec=this.recipe[0];
       })
     }

  ngOnInit(): void {
  }

}
