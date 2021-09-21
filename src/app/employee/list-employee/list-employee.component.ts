import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { DetailEmployeeComponent } from '../detail-employee/detail-employee.component';
import { EmployeePhoto } from '../employee.model';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employee:any=[];
  isImageNotNull:boolean=true;
  config = {
    id: 'custom',
    itemsPerPage: 16,
    currentPage: 1,
    totalItems: 0
  };
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<',
      nextLabel: '>'
  };

  constructor(
    public api:ApiService, 
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {

    this.getListEmployee();
  }

  getListEmployee(){
    this.api.getData('employee').subscribe(result=>{
      this.employee = result;
      if (this.employee.photo_profile == '')
      {
        this.isImageNotNull = false;
      }
    })
  }

  onPageDataChange(event:any){
    this.config.currentPage = event;
    this.getListEmployee();
  }

  onPageSizeChange(event:any):void{
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
    this.getListEmployee();
  }

  detailEmployee(id:number, idx:number){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='480px';
    dialogConfig.height='630px';
    

    dialogConfig.data = {
        id: id,
    };
    let dialog = this.dialog.open(DetailEmployeeComponent, dialogConfig);
    dialog.afterClosed().subscribe(result=>{
      console.log(this.employee);
    })
    
  }

  deleteTheEmployee(id:number, index:number){
    this.api.deleteData('employee',id).subscribe(result=>{
      this.employee.splice(index,1);
      this.getListEmployee();
    })
  }

  updateEmployee(id:number, idx:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='1000px';
    dialogConfig.height='600px';
    

    dialogConfig.data = {
        id: id,
    };
    let dialog = this.dialog.open(UpdateEmployeeComponent, dialogConfig);
    dialog.afterClosed().subscribe(result=>{
      console.log(this.employee);
    })
  }
}
