import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guard/no-auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AddJobComponent } from './admin/add-job/add-job.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { DeleteJobComponent } from './admin/delete-job/delete-job.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent  ,canActivate:[NoAuthGuard]},
  { path: 'register', component: SignupComponent,canActivate:[NoAuthGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path:'admin', component:AdminComponent,canActivate:[AdminGuard]},
  { path: 'addjob',component:AddJobComponent,canActivate:[AdminGuard]},
  { path:'allUsers',component:AllUsersComponent,canActivate:[AdminGuard]},
  { path:'deleteJob',component:DeleteJobComponent,canActivate:[AdminGuard]},
  { path:'editJob',component:EditJobComponent,canActivate:[AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
