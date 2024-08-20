import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobComponent } from './Components/job/job.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobList', component: JobListComponent, children: [{ path: 'job', component: JobComponent }] },
  { path: 'jobList/:jobField', component: JobListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
