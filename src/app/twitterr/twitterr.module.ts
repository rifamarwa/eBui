import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterComponent } from './twitter/twitter.component';
import { ListTwitterComponent } from './list-twitter/list-twitter.component';
import { AddTwitterComponent } from './add-twitter/add-twitter.component';
import { UpdateTwitterComponent } from './update-twitter/update-twitter.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:TwitterComponent,
    children:[
      {
        path:'list-twitter',
        component:ListTwitterComponent,
      },
      {
        path:'add-twitter',
        component:AddTwitterComponent,
      },
      {
        path:'',
        redirectTo:'/twitterr/list-twitter',
        pathMatch:'full'

      }
    ]
  }
];

@NgModule({
  declarations: [
    TwitterComponent,
    ListTwitterComponent,
    AddTwitterComponent,
    UpdateTwitterComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TwitterrModule { }
