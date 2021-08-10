import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  projectname = '';
    
  constructor(private router: Router, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this
    .firestore
    .collection('projects')
    .valueChanges({idField: 'customIdName'})
    .subscribe((project) => {
      this.projects = project;
      console.log('show infos from Project', project);
    });
  }

  addnewProject() {
    console.log('Show', this.projectname);
    this
    .firestore
    .collection('projects')
    .add({name: this.projectname});
  }

  selectproject() {
    console.log('project', this.projectname);
    this.router.navigateByUrl('/board');
    // this
    // .firestore
    // .collection('projects')
    // .get()
  }

}
