import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categoria: any;
  queryName= this.router.url 

  constructor(private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.getCategoriaCategoria(this.queryName);
  }

  getCategoriaCategoria(queryName:string){
    this.categoriaService.getCategoriaCategoria(queryName).subscribe(response => this.categoria=response)
  }
}