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

    // setInterval( () => {
    //   this.activeBoard = localStorage.getItem('activeBoard');
    // }, 5000);

    // window.onstorage = () => {
    //   console.log('Storage changed');
    //   this.activeBoard = localStorage.getItem('activeBoard');
    // };

    // window.addEventListener("localDataStorage", () => {
    //   console.log('Storage changed');
    //   this.activeBoard = localStorage.getItem('activeBoard');

    // }, false);

    if (window.screen.width <= 600) { // 768px portrait
      this.smartphonemenu = true;
    }

    this.auth.authState.subscribe( user => {
     
      if(user) {
        this.user = user;
        // console.log(user.uid);
        // if url is /login
      //  this.router.navigateByUrl('/projects/'+user.uid);
      } else {
        this.router.navigateByUrl('/');
      } 

    });

    
  }
}
