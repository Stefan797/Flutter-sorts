import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flutter-sorts';
  isLoggedIn = false;
  pageIsLogin = false;

  constructor(private router: Router){

  }


  ngOnInit(){
    if(this.isLoggedIn) {
      this.router.navigateByUrl('/projects');
    } 
  }
}
