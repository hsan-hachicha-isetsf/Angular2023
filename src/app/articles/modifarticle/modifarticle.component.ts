import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-modifarticle',
  templateUrl: './modifarticle.component.html',
  styleUrls: ['./modifarticle.component.css']
})
export class ModifarticleComponent {
   id:object
  article: Article = new Article()
  constructor(private artserv : ArticlesService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(){
    this.id=this.route.snapshot.params['id']; 
    this.artserv.GetArticleByID(this.id).subscribe(data=>this.article=data);
  }
  modifarticle(){ 
    this.artserv.UpdateArticle(this.id,this.article).subscribe()
    
}
}
