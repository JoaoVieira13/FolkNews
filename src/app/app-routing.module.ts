import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoticiaComponent } from './noticia/noticia.component'; 


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pais', component: CategoriaComponent },
  { path: 'economia', component: CategoriaComponent },
  { path: 'cultura', component: CategoriaComponent },
  { path: 'saude', component: CategoriaComponent },
  { path: 'desporto', component: CategoriaComponent },
  { path: 'internacional', component: CategoriaComponent },
  { path: 'ciencias', component: CategoriaComponent },
  {path: 'landing-page', component: LandingPageComponent},
  {path:'noticia/:id', component:NoticiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
