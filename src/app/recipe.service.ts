import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  getRecipes(query): Observable<any> {
    console.log(query)
    return this.http.get("https://api.edamam.com/search?q="+query+"&to=100&app_id=279e54ba&app_key=c0f71278d6aa5682a07c76d2d2db3629&from=0&to=3&calories=591-722&health=alcohol-free")
  }
  getRecipe(id): Observable<any> {
    console.log(id);
    return this.http.get("https://api.edamam.com/search?r="+encodeURIComponent(id)+"&app_id=279e54ba&app_key=c0f71278d6aa5682a07c76d2d2db3629&from=0&to=3&calories=591-722&health=alcohol-free")
  }
}
