import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  emailinput = '';
  passwordinput = '';
  firebase: any;

  email;
  password;

  constructor() { }

  ngOnInit(): void {
  }

  auth() {
    if (this.emailinput == this.email) {
      return;
    }

    if (this.passwordinput == this.password) {
      return;
    }
  }

  newuser() {
    console.log(this.email, '&', this.password);
    this.firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
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
