import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flutter-sorts';
  isLoggedIn: boolean;
  user: any;
  smartphonemenu: boolean; 
  activeBoard = localStorage.getItem('activeBoard');
 
 

  constructor(private router: Router, public firestore: AngularFirestore, public auth: AngularFireAuth){ 

  }



  ngOnInit(){

    if (window.screen.width <= 600) { 
      this.smartphonemenu = true;
    }
    if (window.screen.width <= 800) { 
      this.smartphonemenu = true;
    }

    this.auth.authState.subscribe( user => {
      this.user = user;
      if(user) {
       
        // this.router.navigateByUrl('/projects/' + user.uid);
      } else {
       
        this.router.navigateByUrl('/');
      } 
    });
  }
}
