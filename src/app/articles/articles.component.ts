import { Component } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  nombreArticles: number = 1;
  listeArticles: Article[] = [
    {titre:"le championnat du monde", contenu:"le champion du monde de cette année est ", auteur:"Med Taher", date:'12/12/2005', categorie:'Sport'},
    {titre:"l'éducation à l'étranger", contenu:"les avantages et les inconvénients de l'éducation à l'étranger", auteur:"Sara", date:'15/06/2022', categorie:'Education'},
    {titre:"travailler à domicile", contenu:"les avantages et les inconvénients de travailler à domicile", auteur:"John", date:'10/08/2021', categorie:'Travail'},
    {titre:"les meilleurs restaurants de Paris", contenu:"les 10 meilleurs restaurants de Paris", auteur:"Sophie", date:'05/03/2019', categorie:'Loisirs'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
