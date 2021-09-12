import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  projects: any;
  userId: any;
  search: any;
  
  constructor(private router: Router, private route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this
    .firestore.
    collection('projects', ref => ref.where('author', '==', this.userId))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.projects = collection;
    } );
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);
  }

  filterNames() {
    let filterd = this.projects.filter( projects => projects['name'].toLowerCase().includes(this.search) );
    let list = document.getElementById('list');
    list.innerHTML = filterd;
  }
}
