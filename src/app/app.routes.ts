import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignUpComponent } from './features/auth/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './features/auth/pages/forgot-password/forgot-password.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { UserProfileComponent } from './features/user/pages/user-profile/user-profile.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'rooms', component: LoginComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'student', component: UserProfileComponent },

      //   { path: 'users', component: UsersComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
    ],
  },
];
