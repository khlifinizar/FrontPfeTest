import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'', component:AccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'save', component:InscrireComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
