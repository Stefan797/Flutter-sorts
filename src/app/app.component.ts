import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flutter-sorts';
  isLoggedIn = true;
 

  constructor(private router: Router, public firestore: AngularFirestore){ 

  }

  ngOnInit(){
    if(this.isLoggedIn) {
      this.router.navigateByUrl('/projects');
    } 
  }
}
