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

  employees:any=[];

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
      id: this.employees.id,
      first_name: this.employees.first_name,
      last_name: this.employees.last_name,
      email: this.employees.email,
      phone:this.employees.phone,
      organization:this.employees.organization,
      designation:this.employees.designation,
      salary:this.employees.salary,
      status:this.employees.status,
      photo_profile:this.employees.photo_profile
    };
  
    this.api.createDataS(data,'employee').subscribe(result=>{
      this.employees=result;
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
        this.employees.photo_profile= event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.employee.link_image);
    }
  }

}
