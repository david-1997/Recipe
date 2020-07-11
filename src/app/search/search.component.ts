import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;
  flag=false;
  constructor(private recipe:RecipeService,private router:Router) { 
    this.searchForm=new FormGroup({
      query : new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  getResults()
  {
    // //console.log(this.searchForm.value);
    // this.recipe.getRecipes(this.searchForm.value.query).subscribe((data) => {
    //   //console.log(data);
    //   //console.log(data.hits.length);
    // })
    if(this.searchForm.value.query=="")
    {
      alert("Please enter a keyword to search")
    }
    else{
    this.router.navigate(['/results'], { queryParams: { q: this.searchForm.value.query } });
    }
  }
}
