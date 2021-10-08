import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { DetailNewsComponent } from '../detail-news/detail-news.component';
import { UpdateNewsComponent } from '../update-news/update-news.component';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

 
  news:any=[];
  newss:any=[];

  title_news='';
  count = 0;
  page = 1;
  pageSize = 9;
  pageSizes = [9, 12, 18];

  config = {
    id: 'custom',
    itemsPerPage: 9,
    currentPage: 1,
    totalItems: 0
  };
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<',
      nextLabel: '>'
  };

  constructor(
    public api:ApiService, 
    public dialog:MatDialog) {}
 
  ngOnInit(): void {
    
  //  this.getNews();
    this.retrieveNews();
  }

  getNews(){
    this.api.getData('news').subscribe(result=>{
      this.newss = result;
    })
  }

  getSingleNews(){
    this.api.getSingleData('news', 2).subscribe(result=>{
      this.newss = result;
    })
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
    const params = this.getRequestParamsNews(this.title_news, this.config.currentPage, this.config.itemsPerPage);

    this.api.getDataS(params, 'news')
      .subscribe(
        response => {
          const { newss, totalItems } = response;
          this.newss = newss;
          this.config.totalItems = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onPageDataChange(event:any){
    this.config.currentPage = event;
    this.retrieveNews();
   // this.getNews();
  }

  onPageSizeChange(event:any):void{
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
  //  this.getNews();
  }

  handlePageChange(event:any): void {
    this.page = event;
    this.retrieveNews();
  }

  handlePageSizeChange(event:any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveNews();
  }

  deleteTheNews(id:number, index:number){
    this.api.deleteDataS(id,'news').subscribe(result=>{
      this.newss.splice(index,1);
      // this.getNews();
      this.retrieveNews();
    })
  }

  detailNews(id:number, idx:number){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='700px';
    dialogConfig.height='600px';
    

    dialogConfig.data = {
        id: id,
    };
    let dialog = this.dialog.open(DetailNewsComponent, dialogConfig);
    dialog.afterClosed().subscribe(result=>{
      console.log(this.newss);
    })
    
  }

  updateNews(id:number, idx:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='800px';
    dialogConfig.height='600px';
    

    dialogConfig.data = {
        id: id,
    };
    let dialog = this.dialog.open(UpdateNewsComponent, dialogConfig);
    dialog.afterClosed().subscribe(result=>{
      console.log(this.newss);
    })
  }

}
