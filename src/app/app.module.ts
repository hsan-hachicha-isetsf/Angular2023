import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { ListscategorieComponent } from './scategorie/listscategorie/listscategorie.component';
import { InsertscategorieComponent } from './scategorie/insertscategorie/insertscategorie.component';
import { ModifscategorieComponent } from './scategorie/modifscategorie/modifscategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorPageComponent } from './Error-page/error-page/error-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListcategoriesComponent,
    InsertcategorieComponent,
    ModifcategorieComponent,
    ListarticlesComponent,
    InsertarticleComponent,
    ModifarticleComponent,
    ListscategorieComponent,
    InsertscategorieComponent,
    ModifscategorieComponent,
    ListarticlescardComponent,
    ListarticlestableComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
