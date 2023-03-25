import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/article';

import { Scategorie } from 'src/app/models/scategorie';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
  articles:Article[]
  scategories:Scategorie[];
term: string;

  constructor(private artserv:ArticlesService,private scatserv:ScategorieService){}
ngOnInit(){
  this.Listart()
  this.loadCategories();
}
Listart(){
return this.artserv.getarticles().subscribe(data=>
  this.articles=data),
  (error:any)=>console.log(error)
  

}
loadCategories () {
  return this.scatserv.getscategories().subscribe(data => {
  this.scategories = data ; } ),
  (err:any)=>console.log(err)
  } 
}
