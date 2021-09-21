import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-twitter',
  templateUrl: './add-twitter.component.html',
  styleUrls: ['./add-twitter.component.css']
})
export class AddTwitterComponent implements OnInit {

  tweet:any=[];
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
    
    // this.createNewsFromService();
  }

  saveData():void{

    const data = {
      id: this.tweet.id,
      name: this.tweet.name,
      // profile_image:this.profile_image,
      username: this.tweet.username,
      date: this.tweet.date,
      text:this.tweet.text,
      image:this.tweet.image
    };
  
    this.api.createData('twitter', data).subscribe(result=>{
      this.tweet=result;
      this.submitted = true;
    })
  }
  
  onSubmit(){
    this.submitted = true;
    // this.save();
  }

  fileTweetImageChange(event:any){
    if(event.target.files){
      // this.tweet.link_image = event.target.files[0];
      var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.tweet.image= event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.tweet.link_image);
    }
  }

  filePhotoProfileChange(event:any){
    if(event.target.files){
      // this.tweet.link_image = event.target.files[0];
      var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.tweet.profile_image= event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.tweet.link_image);
    }
  }


}
