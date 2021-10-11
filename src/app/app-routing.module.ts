import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { RegisterComponent } from './layout/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { FullRoutes } from './shared/routes/full-routes';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: FullRoutes,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AuthLayoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
