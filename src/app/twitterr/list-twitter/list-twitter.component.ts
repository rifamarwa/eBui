import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { UpdateTwitterComponent } from '../update-twitter/update-twitter.component';

@Component({
  selector: 'app-list-twitter',
  templateUrl: './list-twitter.component.html',
  styleUrls: ['./list-twitter.component.css']
})
export class ListTwitterComponent implements OnInit {

  twitter:any=[];
  config = {
    id: 'custom',
    itemsPerPage: 8,
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

    this.getListTwitter();
  }

  getListTwitter(){
    this.api.getData('twitter').subscribe(result=>{
      this.twitter = result;
    })
  }

  onPageDataChange(event:any){
    this.config.currentPage = event;
    this.getListTwitter();
  }

  onPageSizeChange(event:any):void{
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
    this.getListTwitter();
  }

  deleteTheTwitter(id:number, index:number){
    this.api.deleteData('twitter',id).subscribe(result=>{
      this.twitter.splice(index,1);
      this.getListTwitter();
    })
  }

  updateTwitter(id:number, idx:number){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='900px';
    dialogConfig.height='500px';
    

    dialogConfig.data = {
        id: id,
    };
    let dialog = this.dialog.open(UpdateTwitterComponent, dialogConfig);
    dialog.afterClosed().subscribe(result=>{
      console.log(this.twitter);
    })
  }

}
