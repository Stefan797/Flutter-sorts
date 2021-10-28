import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router, public auth: AngularFireAuth, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.auth.authState.subscribe( user => {
      if(user) {
       
        this.router.navigateByUrl('/projects/' + user.uid);
      }
    });
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      // this.isLoggedIn = true; 
      // Signed in
      var user = userCredential.user;

      this.router.navigateByUrl('/projects/' + user.uid);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      this._snackBar.open(error.message, "ok");
    });
  }

}
