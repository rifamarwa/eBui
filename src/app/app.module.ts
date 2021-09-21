import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { NewsModule } from './news/news.module';
import { EmployeeModule } from './employee/employee.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule, MDBBootstrapModule, WavesModule } from 'angular-bootstrap-md';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { TwitterrModule } from './twitterr/twitterr.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NewsModule,
    EmployeeModule,
    TwitterrModule,
    FlexLayoutModule,
    HighchartsChartModule,
    ChartsModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
