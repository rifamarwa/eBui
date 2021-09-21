import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  news:any=[];
  constructor(
    public api:ApiService,
    public dialogRef:MatDialogRef<UpdateNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ) { }


  ngOnInit(): void {

    this.getSingleNews();
  }

  getSingleNews()
  {
      this.api.getSingleData('news', this.data.id).subscribe(result=>{
      this.news = result;
      console.log(result);
      
    })
  }

  getAllNews(){
    this.api.getData('news').subscribe(result=>{
      this.news = result;
    })
  }

  updateNews(id:number, data:any){
    this.api.updateData('news', id, data).subscribe(result=>{
      
      console.log(result);
      this.dialogRef.close(result);
      this.news = this.getAllNews();
      this.reloadCurrentRoute();
     
      // this.news = result;
    })
  }

  reloadCurrentRoute() {
    window.location.reload();
  }



}
