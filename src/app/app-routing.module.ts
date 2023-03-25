import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ListscategorieComponent } from './scategorie/listscategorie/listscategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { InsertarticleComponent } from './articles/insertarticle/insertarticle.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticleComponent } from './articles/modifarticle/modifarticle.component';
import { LoginComponent } from './authentification/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorPageComponent } from './Error-page/error-page/error-page.component';

import { AuthguardGuard } from './authguard.guard';
import { RegisterComponent } from './authentification/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path:"larticles",component:ListarticlesComponent,canActivate:[AuthguardGuard]  },
  {path:"lcategories",component:ListcategoriesComponent,canActivate:[AuthguardGuard]  },
  {path:"lscategories",component:ListscategorieComponent,canActivate:[AuthguardGuard]  },
  {path:"lartcard",component:ListarticlescardComponent,canActivate:[AuthguardGuard]  },
  {path:"insertart", component:InsertarticleComponent,canActivate:[AuthguardGuard]  },
  {path:"listarticletable", component:ListarticlestableComponent,canActivate:[AuthguardGuard] },
  {path:"editarticle/:id",component:ModifarticleComponent,canActivate:[AuthguardGuard]  },
  {path:"home",component:MenuComponent,canActivate:[AuthguardGuard] },
  {path:"login",component:LoginComponent},
  {path: "register",component:RegisterComponent},
  {path: '**',component:ErrorPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
