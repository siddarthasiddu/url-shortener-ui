import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppUserHomeComponent } from './app-user-home/app-user-home.component';
import { HomeContentComponent} from './home-content/home-content.component';
import { AppLogoutComponent } from './app-logout/app-logout.component';
import { ShortUrlRedirectComponent } from './short-url-redirect/short-url-redirect.component';

const routes: Routes = [
  {
    path: '', component: AppHomeComponent,
    children: [
      {path: '', component: HomeContentComponent},
      {path: 'login', component: AppLoginComponent},
      {path: 'register', component: AppRegisterComponent},
      {path: 'logout', component: AppLogoutComponent}
    ]
  },
  { path: 'home', component: AppUserHomeComponent },
  { path: 'short/:shortCode', component: ShortUrlRedirectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
