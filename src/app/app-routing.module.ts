import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AddannonceComponent } from './addannonce/addannonce.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './articles/articles.component';




const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/product/:id', component: SingleProductComponent},
  {path: 'annonce', component: AnnonceComponent, children: [
    {
      path:'add', component: AddannonceComponent
    }]},
    {path: 'work-page', component: OffresEmploiComponent},
    {path: 'article', component: ArticlesComponent},


    
    
    {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
