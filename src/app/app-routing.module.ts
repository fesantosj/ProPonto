import { LoginModule } from './../pages/login/login.module';
//import { LayoutComponent } from './template/layout/template.component';
import { LayoutComponent } from './template';
import { AuthGuard } from '../services/authguard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path:'home',
        loadChildren: () =>
          import('src/pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path:'cargo',
        loadChildren: () =>
          import('src/pages/cargo/cargo.module').then((m) => m.CargoModule),
      },
    ],
  },
  {
    path: '',    
    component: LayoutComponent,
    children: [
      {
        path:'teste',
        loadChildren: () =>
          import('src/pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '',    
    component: LayoutComponent,
    children: [
      {
        path:'arroba',
        loadChildren: () =>
          import('src/pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'login',    
    loadChildren: () =>
          import('src/pages/login/login.module').then((m) => m.LoginModule),
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
