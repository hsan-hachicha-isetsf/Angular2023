import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  categories:Categorie[]
  constructor(private catserv:CategorieService){}
  ngOnInit() {
    return this.catserv.Listcategories().subscribe(data => 
      this.categories = data),
                (err:any)=>console.log(err) 
  

  }


}
