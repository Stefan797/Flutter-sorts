import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = {
    
  };
  projectname = '';
    
  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this
    .firestore
    .collection('projects')
    .valueChanges()
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
    .add({"name":this.projectname});
  }

}
