import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update-twitter',
  templateUrl: './update-twitter.component.html',
  styleUrls: ['./update-twitter.component.css']
})
export class UpdateTwitterComponent implements OnInit {

  twitter:any=[];
  twitters:any=null;
  isImageSaved:boolean=false;
  isImageNull:boolean=true;
  constructor(
    public api:ApiService,
    public dialogRef:MatDialogRef<UpdateTwitterComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.getSingleTwitter();
  }

  getSingleTwitter()
  {
    this.api.getSingleDataS('twitter', this.data.id).subscribe(result =>{
      this.twitters = result;
      if(this.twitters.image == null){
        this.isImageNull = true;
      }
      console.log(result);
     
    })
  }

  getAllTwitter(){
    this.api.getData('twitter').subscribe(result=>{
      this.twitters = result;
    })
  }

  updateTwitter(id:number, data:any){
    this.api.updateDataS('twitter', id, data).subscribe(result=>{
      
      console.log(result);
      this.dialogRef.close(result);
      this.twitters = this.getAllTwitter();
      this.reloadCurrentRoute();
     
      // this.twitter = result;
    })
  }

  fileChange(event:any){
    if(event.target.files){
      // this.news.link_image = event.target.files[0];
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.twitters.photo_profile = event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.news.link_image);
    }
  }

  

  reloadCurrentRoute() {
    window.location.reload();
  }

}
