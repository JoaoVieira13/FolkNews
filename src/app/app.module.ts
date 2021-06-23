import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './categoria/categoria.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { FooterComponent } from './footer/footer.component';
import { LandingServiceService } from './landing-page/landing-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavBarComponent, CategoriaComponent, LandingPageComponent, NoticiaComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule,HttpClientModule],
  providers: [CategoriaService, LandingServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
