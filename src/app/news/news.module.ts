import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewsComponent } from './list-news/list-news.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';

const routes: Routes = [
  {
    path:'',
    component:NewsComponent,
    children:[
      {
        path:'list-news',
        component:ListNewsComponent,
      },
      {
        path:'add-news',
        component:AddNewsComponent
      },
      {
        path:'',
        redirectTo:'/news/list-news',
        pathMatch:'full'

      }
    ]
  }
];

@NgModule({
  declarations: [
    ListNewsComponent,
    NewsComponent,
    AddNewsComponent,
    UpdateNewsComponent,
    DetailNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewsModule { }
