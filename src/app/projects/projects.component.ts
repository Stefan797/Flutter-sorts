import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  projectname = '';
  userId: string;
    
  constructor(private router: Router, private route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit() {

    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);

    this
    .firestore
    .collection('projects', ref => ref. where("author", "==", this.userId ))
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
    .add({name: this.projectname, author: this.userId});
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
