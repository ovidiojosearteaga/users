import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageUserListComponent } from './pages/page-user-list/page-user-list.component';
import { PageEditUserComponent } from './pages/page-edit-user/page-edit-user.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'profile', component: PageProfileComponent },
  { path: 'users', component:PageUserListComponent },
  { path: 'edit-user', component:PageEditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
