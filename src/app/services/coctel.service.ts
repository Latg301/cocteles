import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoctelService {

  API_URL = 'https://thecocktaildb.com/api/json/v1/1/';

  constructor(private http:HttpClient) {}
  getCocktailsName(name:string): Observable<any>{
    return this.http.get<any>(`${this.API_URL}search.php?s=${name}`)
  }
}
