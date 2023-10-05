import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { SignInComponent } from './layout/auth/sign-in/sign-in.component';
import { SignUpComponent } from './layout/auth/sign-up/sign-up.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {
  canActivateAuth,
  canActivateDashboard,
} from './services/guard/auth-guard.service';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';

const routes: Routes = [
  //add routes with default route to auth component , auth component needs to have child routes "signin" and "singup"
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [canActivateAuth],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [canActivateDashboard],
    component: DashboardComponent,
    children: [
      {
        path: 'userprofile',
        component: UserProfileComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
