import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  employee:any=[];
  isImageSaved:boolean=false;
  constructor(
    public api:ApiService,
    public dialogRef:MatDialogRef<DetailEmployeeComponent>,
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


}
