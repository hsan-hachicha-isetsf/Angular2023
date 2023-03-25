import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/services/articles.service';
import { ScategorieService } from 'src/app/services/scategorie.service';
@Component({
  selector: 'app-insertarticle',
  templateUrl: './insertarticle.component.html',
  styleUrls: ['./insertarticle.component.css']
})
export class InsertarticleComponent {
   
    article:Article=new Article()
    scategorie:Scategorie[]

    images:any;

constructor(private artserv:ArticlesService,private router:Router,private scatserv:ScategorieService){}
ngOnInit(){
 this.loadscategorie()
}
loadscategorie(){
  return this.scatserv.getscategories().subscribe(data=>
    this.scategorie=data),
    (error:any)=>console.log(error)
}

submitImage(event:any){
  if(event.target.value){
  this.article.imageart=<File>event.target.files[0];

  }
} 

ajoutarticle=()=>{
  let obj:any = this.article; 
  
  let fd= new FormData();

  for ( var key in this.article ) {
    fd.append(key, obj[key]);
    } 

  this.artserv.Addarticle(fd).subscribe((data=>this.router.navigate(['/larticles'])))
}

}
