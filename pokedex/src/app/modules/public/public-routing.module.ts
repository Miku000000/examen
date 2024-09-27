import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {path: '', component: LandingComponent},
    {path: 'pokedex',  component: PokedexComponent},
    {path: 'productos',  component: ProductComponent},
    {path: 'productos/:id',  component: ProductDetailComponent}
     ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
