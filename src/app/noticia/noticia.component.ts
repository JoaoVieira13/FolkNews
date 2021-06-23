import { LiteralMapKey } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  like = 0;
  dislike = 0;
  id: any;
  noticia: any;

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiaService
  ) {}

  ngOnInit(): void {
    const par = this.route.snapshot.paramMap.get('id');
    this.id = par;
    this.getNoticia();
  }
  getNoticia() {
    this.noticiaService.getNoticia(this.id).subscribe((response: any) => {
      this.noticia = response;
    });
  }

  likeUP(){
    if(this.like < 1 && this.dislike == 0){
      this.like++;
    }
    else if(this.like == 1 ){
      this.like--;
    }
  }
  dislikeUP(){
    if(this.dislike < 1 && this.like == 0){
      this.dislike++;
    }
    else if(this.dislike == 1){
      this.dislike--;
    }
  }

}
