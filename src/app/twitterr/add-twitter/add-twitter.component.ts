import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-twitter',
  templateUrl: './add-twitter.component.html',
  styleUrls: ['./add-twitter.component.css']
})
export class AddTwitterComponent implements OnInit {

  twitters:any=[];
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
      id: this.twitters.id,
      name: this.twitters.name,
      // profile_image:this.profile_image,
      username: this.twitters.username,
      date: this.twitters.date,
      text:this.twitters.text,
      image:this.twitters.image
    };
  
    this.api.createDataS(data, 'twitter').subscribe(result=>{
      this.twitters=result;
      this.submitted = true;
    })
  }
  
  onSubmit(){
    this.submitted = true;
    // this.save();
  }

  fileTweetImageChange(event:any){
    if(event.target.files){
      // this.twitters.link_image = event.target.files[0];
      var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.twitters.image= event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.twitters.link_image);
    }
  }

  filePhotoProfileChange(event:any){
    if(event.target.files){
      // this.twitters.link_image = event.target.files[0];
      var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.twitters.profile_image= event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.twitters.link_image);
    }
  }


}
