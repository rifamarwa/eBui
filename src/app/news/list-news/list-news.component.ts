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
    
    this.getNews();
  }

  getNews(){
    this.api.getData('news').subscribe(result=>{
      this.news = result;
    })
  }

  getSingleNews(){
    this.api.getSingleData('news', 2).subscribe(result=>{
      this.news = result;
    })
  }

  onPageDataChange(event:any){
    this.config.currentPage = event;
    this.getNews();
  }

  onPageSizeChange(event:any):void{
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
    this.getNews();
  }

  deleteTheNews(id:number, index:number){
    this.api.deleteData('news',id).subscribe(result=>{
      this.news.splice(index,1);
      this.getNews();
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
      console.log(this.news);
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
      console.log(this.news);
    })
  }

}
