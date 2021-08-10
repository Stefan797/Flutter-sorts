import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  isLoggedIn = false;
  firebase: any;

  constructor(public auth: AngularFireAuth, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      this.isLoggedIn = true; 
      // Signed in
      var user = userCredential.user;
    // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      this._snackBar.open(error.message, "ok");
    });
  }

}
