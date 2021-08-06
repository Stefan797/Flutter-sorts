import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = {};
  // inputnewproject = '';
    
  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this
    .firestore
    .collection('projects')
    .valueChanges()
    .subscribe((project) => {
      console.log('show infos from Project', project);
    });
  }


  // getNameofnewproject(projectName: any) {
  //     projectName = inputnewproject.value;
  //     return projectName;
  // }


  addnewproject() {
    this
    .firestore
    .collection('projects')
    .add({'hallo': 'test'});
  }

}
