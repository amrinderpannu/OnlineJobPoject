import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../guard/user.guard';
import { AllJobsComponent } from './components/all-jobs/all-jobs.component';
import { ApplyJobComponent } from './components/apply-job/apply-job.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JobAppliedComponent } from './components/job-applied/job-applied.component';
import { LatestJobsComponent } from './components/latest-jobs/latest-jobs.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { SettingComponent } from './components/setting/setting.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'all-jobs', component: AllJobsComponent , canActivate:[UserGuard]},
  { path: 'user-profile', component: UserProfileComponent , canActivate:[UserGuard]},
  { path: 'search-job', component: SearchJobComponent , canActivate:[UserGuard]},
  { path: 'setting', component: SettingComponent , canActivate:[UserGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate:[UserGuard]},
  { path: 'latestJobs', component:LatestJobsComponent, canActivate:[UserGuard]},
  { path:'applyJob',component:ApplyJobComponent,canActivate:[UserGuard]},
  { path:'jobApplied',component:JobAppliedComponent,canActivate:[UserGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
