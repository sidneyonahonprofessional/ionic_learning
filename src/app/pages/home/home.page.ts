import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   
  private navs: any;

  constructor() {

    this.navs = 
    [
      { title: 'Join Us', path:'registration', direction: 'forward' },
      { title: 'Login ',  path:'login', direction: 'forward' },
      { title: 'Profile', path: 'profile/1', direction: 'forward'}
    ];
  }

  ngOnInit() {
  }

  navTo(path) {
    console.log(path)
  }
}
