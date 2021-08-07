import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  firebase: any;
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      this.isLoggedIn = true; 
      // Signed in
      var user = userCredential.user;
    // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }


  // // firebase.auth().signOut().then(() => {
  // // Sign-out successful.
  //   }).catch((error) => {
  // // An error happened.
  //   });

}
