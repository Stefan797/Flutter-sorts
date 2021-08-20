import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  emailinput = '';
  passwordinput = '';
  // firebase: any;

  // email;
  // password;

  constructor(private router: Router, public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  // auth() {
  //   if (this.emailinput == this.email) {
  //     return;
  //   }

  //   if (this.passwordinput == this.password) {
  //     return;
  //   }
  // }

  newuser() {
    console.log(this.emailinput, '&', this.passwordinput);
    this.auth.createUserWithEmailAndPassword(this.emailinput, this.passwordinput)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    });
  }

}
