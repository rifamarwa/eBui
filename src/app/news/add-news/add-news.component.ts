import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newss:any=[];
  submitted = false;
  options: FormGroup;
  categories = new FormControl;
  imageError: string='';
  isImageSaved: boolean=false;
  cardImageBase64: string='';
  url = ''

  constructor(
    private api:ApiService, fb: FormBuilder
  ) { 
    this.options = fb.group({
      categories: this.categories
    });
  }

  ngOnInit(): void {
    
    
  }

  saveData():void{

    const data = {
      id: this.newss.id,
      title_news: this.newss.title_news,
      media_name: this.newss.media_name,
      date: this.newss.date,
      content_text:this.newss.content_text,
      link_image:this.newss.link_image
    };
  
    this.api.createDataS(data, 'news').subscribe(result=>{
      this.newss=result;
      this.submitted = true;
    })
  }
  
  onSubmit(){
    this.submitted = true;
    // this.save();
  }

  fileChange(event:any){
    if(event.target.files){
      // this.newss.link_image = event.target.files[0];
      var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.newss.link_image = event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.newss.link_image);
    }
  }

  // removeImage(){
  //   this.cardImageBase64 = '';
  //   this.isImageSaved = false;
  // }

}
