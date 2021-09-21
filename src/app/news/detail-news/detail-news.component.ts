import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {

  news:any=[];
  isImageSaved:boolean=false;
  constructor(
    public api:ApiService,
    public dialogRef:MatDialogRef<DetailNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.getSingleNews();
  }

  getSingleNews()
  {
    this.api.getSingleData('news', this.data.id).subscribe(result =>{
      this.news = result;
      console.log(result);
    })
  }
}
