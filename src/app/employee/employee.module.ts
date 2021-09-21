import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {
        path:'list-employee',
        component:ListEmployeeComponent,
      },
      {
        path:'add-employee',
        component:AddEmployeeComponent,
      },
      {
        path:'',
        redirectTo:'/employee/list-employee',
        pathMatch:'full'

      }
    ]
  }
];

@NgModule({
  declarations: [
    ListEmployeeComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class EmployeeModule { }
