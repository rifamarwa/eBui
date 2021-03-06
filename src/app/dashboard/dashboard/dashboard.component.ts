import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  newss:any=[];
  media:any=[];

  title_news='';
  count = 0;
  page = 1;
  pageSize = 100;
  pageSizes = [4, 12, 18];

  config = {
    id: 'custom',
    itemsPerPage: 3,
    size: 3,
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
    public api:ApiService) {}
  
  ngOnInit(): void {
    //this.getNews();
    this.retrieveNews();
  }

  Highcharts: typeof Highcharts = Highcharts;


  data1 = [6, 3.9, 1.2 , 4.9, 4, 6, 3.5, 5.5, 4.8, 5.5, 4];
  name1= "ItSolutionStuff.com";

  chartOptionsColumn: Highcharts.Options = {
    title: {
      text: "Histogram",
      align:'left'
    },
    xAxis: {
      categories: ["Jan","Feb","Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    yAxis: {
      categories: ["$0","$1k", "$2k", "$3k", "$4k", "$5k", "$6k", "$7k"]
    },
    chart:{
      width:520,
    },
    series: [
      {
        name: "",
        type: "column",
        data: this.data1,
        color: "#5885EA"
      }
    ]
  };

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [35,55,15], label: 'My First dataset' }
  ];


  public chartLabels: Array<any> = ['Compass' , 'Okezone', 'Trans89'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FF8988', '#0F123F', '#EFEFEF']
    }
  ];

  public chartOptions: any = {
    responsive: true,
    size:5
  };



  // getNews(){
  //   this.api.getData('news').subscribe(result=>{
  //     this.news = result;
  //   })
  // }

  getRequestParamsNews(searchTitleNews:string, page:number, pageSize:number): any {
    // tslint:disable-next-line:prefer-const
    let params:any = {};

    if (searchTitleNews) {
      params[`title_news`] = searchTitleNews;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveNews(): void {
    const params = this.getRequestParamsNews(this.title_news, this.config.currentPage, this.config.itemsPerPage);

    this.api.getDataS(params, 'news')
      .subscribe(
        response => {
          const { newss, totalItems } = response;
          this.newss = newss;
          this.config.totalItems = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onPageDataChange(event:any){
    this.config.currentPage = event;
   // this.getNews();
   this.retrieveNews();
  }

  onPageSizeChange(event:any):void{
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
   // this.getNews();
   this.retrieveNews();
  }

  getMedia(){
    this.api.getMedia('news/media').subscribe(result=>{
      this.media = result;
    })
  }

  
}


