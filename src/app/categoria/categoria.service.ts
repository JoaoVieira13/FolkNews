import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  getCategoriaCategoria(queryName:string){
    return this.http.get('http://www.publico.pt/api/list'+ queryName)
     }
}
