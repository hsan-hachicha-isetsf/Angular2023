import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categorie} from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
baseurl="http://localhost:3001/api/categories"
  constructor(private http:HttpClient) { }

  Listcategories():Observable<Categorie[]>
  {
    return this.http.get<Categorie[]>(this.baseurl);
  }


}
