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

  username = '';
  twitters:any=[];

  count = 0;
  page = 1;
  pageSize = 8;
  pageSizes = [8, 12, 16];

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

   // this.getListTwitter();
    this.retrieveTwitter();
  }

  getListTwitter(){
    this.api.getData('twitter').subscribe(result=>{
      this.twitter = result;
    })
  }

  getRequestParamsTwitter(searchUsername:string, page:number, pageSize:number): any {
    // tslint:disable-next-line:prefer-const
    let params:any = {};

    if (searchUsername) {
      params[`username`] = searchUsername;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  // getRequestParamsTwitter(page:number, pageSize:number): any {
  //   // tslint:disable-next-line:prefer-const
  //   let params:any = {};

  //   if (page) {
  //     params[`page`] = page - 1;
  //   }

  //   if (pageSize) {
  //     params[`size`] = pageSize;
  //   }

  //   return params;
  // }

  retrieveTwitter(): void {
    const params = this.getRequestParamsTwitter(this.username, this.config.currentPage, this.config.itemsPerPage);

    this.api.getDataS(params, 'twitter')
      .subscribe(
        response => {
          const {totalItems, twitters} = response;
          this.twitters = twitters;
          this.config.totalItems = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  // retrieveTwitter(): void {
  //  // const params = this.getRequestParamsTwitter(this.config.currentPage, this.config.itemsPerPage);

  //   const page = this.config.currentPage;
  //   const limit = this.config.itemsPerPage;

  //   this.api.getDataDescending(page, limit, 'twitter')
  //     .subscribe(
  //       response => {
  //         const {twitters} = response;
  //         this.twitters = twitters;
  //         // this.page = page;
  //         // this.pageSize = limit;
  //        // this.config.totalItems = totalItems;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  onPageDataChange(event:any){
    this.config.currentPage = event;
  //  this.getListTwitter();
   this.retrieveTwitter();
  }

  onPageSizeChange(event:any):void{
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
    //this.getListTwitter();
    this.retrieveTwitter();
  }

  deleteTheTwitter(id:number, index:number){
    this.api.deleteDataS(id,'twitter').subscribe(result=>{
      this.twitters.splice(index,1);
     // this.getListTwitter();
     this.retrieveTwitter();
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
      console.log(this.twitters);
    })
  }

}
