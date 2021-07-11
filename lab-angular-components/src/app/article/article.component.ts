import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/article.models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent {  
  
  private symbol: number = 250;

  @Input() article: Article[] = [];
  @Input() articleDesc: string = '';

  descToShow: string;

  constructor () {
    this.descToShow = '';
    // this.article = article;
    // this.articleDesc = articleDesc;
  }


}
