import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="EbuiApp"
  menu=[
    {
      name:'Dashboard',
      icon:'speed',
      url:'/dashboard'
    },
    {
      name:'News',
      icon:'article',
      url:'/news/'
    },
    {
      name:'Employee',
      icon:'account_balance_wallet',
      url:'/employee/'
    },
    {
      name:'Twitter',
      icon:'chat',
      url:'/twitterr/'
    }
  ];

  settings=[
    {
      name:'Settings',
      icon:'settings',
      url:''
    },
    {
      name:'Info',
      icon:'info',
      url:''
    }
  ]
}
