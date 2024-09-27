import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PublicRoutingModule } from './public-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



@NgModule({
  declarations: [
    LayoutComponent,
    LandingComponent,
    PokedexComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
