import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  sub;
  query;
  recipes;
  flag=true;
  flag1=true;
  constructor(private route: ActivatedRoute,private router: Router,private recipe:RecipeService) {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.query = params['q'];
      });
    this.recipe.getRecipes(this.query).subscribe((data) => {
      console.log(data);
      this.recipes=data.hits;
      if(this.recipes.length==0)
      {
        this.flag=false;
      }
      else
      {
        this.flag=false;
      }
     })
   }

  ngOnInit(): void {
  }

}
