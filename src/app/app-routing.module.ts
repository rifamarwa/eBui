import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'news',
    loadChildren:()=>import('./news/news.module').then(mod=>mod.NewsModule)
  },
  {
    path:'employee',
    loadChildren:()=>import('./employee/employee.module').then(mod=>mod.EmployeeModule)
  },
  {
    path:'twitterr',
    loadChildren:()=>import('./twitterr/twitterr.module').then(mod=>mod.TwitterrModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/dashboard'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
