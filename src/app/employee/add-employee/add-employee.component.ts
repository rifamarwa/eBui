import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:any=[];
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
      id: this.employee.id,
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      email: this.employee.email,
      phone:this.employee.phone,
      organization:this.employee.organization,
      designation:this.employee.designation,
      salary:this.employee.salary,
      status:this.employee.status,
      photo_profile:this.employee.photo_profile
    };
  
    this.api.createData('employee', data).subscribe(result=>{
      this.employee=result;
      this.submitted = true;
    })
  }
  
  onSubmit(){
    this.submitted = true;
    // this.save();
  }

  fileChange(event:any){
    if(event.target.files){
      // this.employee.link_image = event.target.files[0];
      var reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.employee.photo_profile= event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.employee.link_image);
    }
  }

}
