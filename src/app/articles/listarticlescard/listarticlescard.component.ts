import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/article';
@Component({
  selector: 'app-listarticlescard',
  templateUrl: './listarticlescard.component.html',
  styleUrls: ['./listarticlescard.component.css']
})
export class ListarticlescardComponent {
  articles:Article[]
  constructor(private artserv:ArticlesService){}
ngOnInit(){
  this.Listart()
}
Listart(){
return this.artserv.getarticles().subscribe(data=>
  this.articles=data),
  (error:any)=>console.log(error)
  

}
}
