import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandsComponent } from './pages/brands/brands.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesComponent } from './pages/category/category.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    PreferencesComponent,
    BrandsComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
