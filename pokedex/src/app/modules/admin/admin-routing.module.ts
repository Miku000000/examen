import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrandsComponent } from './pages/brands/brands.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {
      path: '', component: DashboardComponent,
    },
    {
      path: 'marcas', component: BrandsComponent,
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
