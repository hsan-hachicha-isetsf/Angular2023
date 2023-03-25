import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
baseurl="http://localhost:3001/api/articles"
  constructor(private http:HttpClient) { }
  getarticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.baseurl)
  }

  Deletearticle(id:object):Observable<Article>
  {
      return this.http.delete<Article>(this.baseurl + '/' + id);
  }
  Addarticle (art : any ):Observable<Article>
  {
   return this.http.post<Article>(this.baseurl,art)
  }
  GetArticleByID(id:object):Observable<Article>
  { 
    return this.http.get<Article>(this.baseurl+ '/' + id);
  }
  UpdateArticle(id:object,art:Article): Observable<Article> 
  {
      return this.http.put<Article>(this.baseurl + '/' + id,art);
  }
}
