import { Component, OnInit } from '@angular/core';
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
 
 

  constructor(private router: Router, public firestore: AngularFirestore, public auth: AngularFireAuth){ 

  }

  ngOnInit(){
    this.auth.authState.subscribe( user => {
      this.user = user;
      if(user) {
        console.log(user.uid);
        this.router.navigateByUrl('/projects');
      } else {
        this.router.navigateByUrl('/');
      } 

    });
  }
}
