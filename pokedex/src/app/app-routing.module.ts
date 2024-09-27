import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./modules/public/public.module')
    .then(m => m.PublicModule), 
  },
  {
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module')
    .then(m => m.AuthModule), 
  },
  {
    path: 'admin', 
    loadChildren: () => import('./modules/admin/admin.module')
    .then(m => m.AdminModule), 
  },
  { path: "Prueba1", component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
