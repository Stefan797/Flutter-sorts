import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { getAuth, deleteUser } from "firebase/auth";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: any;

  constructor(private router: Router, public auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('ausgelogt');
    this.auth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  deleteuserAccount() {
    console.log('Account ist gelöscht !');

    // deleteUser(user).then(() => {
    //   // User deleted.
    // }).catch((error) => {
    //   // An error ocurred
    //   // ...
    // });

    // this.router.navigateByUrl('/');
  }

  showreleaseInfo() {
    alert("this function is only possible after the next update");
  }

}
