import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { SignUpComponent } from './features/auth/pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './features/auth/pages/forgot-password/forgot-password.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { UserProfileComponent } from './features/user/pages/user-profile/user-profile.component';
import { AreaGeneralComponent } from './features/area/pages/area-general/area-general.component';
import { StudentManageComponent } from './features/user/pages/student-manage/student-manage.component';
import { ContractComponent } from './features/contract/pages/contract/contract.component';
import { RegisterContractComponent } from './features/contract/pages/register-contract/register-contract.component';
import { ShifScheduleManageComponent } from './features/shift-schedule/pages/shif-schedule-manage/shif-schedule-manage.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'rooms', component: AreaGeneralComponent },
      { path: 'students', component: StudentManageComponent },
      { path: 'contract', component: ContractComponent },
      { path: 'register-list', component: RegisterContractComponent },
      { path: 'shift-manage', component: ShifScheduleManageComponent },
      { path: 'profile', component: UserProfileComponent },

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
  { path: '**', component: NotFoundPageComponent },
];
