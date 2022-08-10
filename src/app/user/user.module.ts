import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AllJobsComponent } from './components/all-jobs/all-jobs.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { SettingComponent } from './components/setting/setting.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplyJobComponent } from './components/apply-job/apply-job.component';
import { JobAppliedComponent } from './components/job-applied/job-applied.component';
import { LatestJobsComponent } from './components/latest-jobs/latest-jobs.component';


@NgModule({
  declarations: [
    UserComponent,
    AllJobsComponent,
    UserProfileComponent,
    SearchJobComponent,
    SettingComponent,
    DashboardComponent,
    ApplyJobComponent,
    JobAppliedComponent,
    LatestJobsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
