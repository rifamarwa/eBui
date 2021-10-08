import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newss:any=[];

  title_news='';
  count = 0;
  page = 1;
  pageSize = 9;
  pageSizes = [9, 12, 18];

  constructor(public api:ApiService) { }

  ngOnInit(): void {

    this.retrieveNews();
  }

  getRequestParamsNews(searchTitleNews:string, page:number, pageSize:number): any {
    // tslint:disable-next-line:prefer-const
    let params:any = {};

    if (searchTitleNews) {
      params[`title_news`] = searchTitleNews;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveNews(): void {
    const params = this.getRequestParamsNews(this.title_news, this.page, this.pageSize);

    this.api.getDataS(params, 'news')
      .subscribe(
        response => {
          const { newss, totalItems } = response;
          this.newss = newss;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
