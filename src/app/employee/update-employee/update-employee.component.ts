import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:any=[];
  employeeLoop:any=[];
  isImageSaved:boolean=false;
  constructor(
    public api:ApiService,
    public dialogRef:MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.getSingleEmployee();
  }

  getSingleEmployee()
  {
    this.api.getSingleData('employee', this.data.id).subscribe(result =>{
      this.employee = result;
      console.log(result);
    })
  }

  getAllEmployee(){
    this.api.getData('employee').subscribe(result=>{
      this.employee = result;
    })
  }

  updateEmployee(id:number, data:any){
    this.api.updateData('employee', id, data).subscribe(result=>{
      
      console.log(result);
      this.dialogRef.close(result);
      this.employee = this.getAllEmployee();
      this.reloadCurrentRoute();
    })
  }

  fileChange(event:any){
    if(event.target.files){
      // this.news.link_image = event.target.files[0];
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.employee.photo_profile = event.target.result
      }
      this.isImageSaved = true;
      // reader.readAsDataURL(this.news.link_image);
    }
  }

  reloadCurrentRoute() {
    window.location.reload();
  }

}
