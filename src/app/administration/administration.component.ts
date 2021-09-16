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
  tasks: any;
  displayedColumns: string[] = ['Created', 'State', 'number', 'text'];
  data = [
    {
      text: 'Hallo ',
      state: 'Done',
      number: '1',
      title: 'Task 1'
    }
  ]
  
  constructor(private router: Router, private route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this
    .firestore.
    collection('projects')
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.projects = collection;
      console.log(this.projects);
    } );
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);

    this.setTasksFromProjectId('VOeNDTUFlCT6vVwjXdgp');
  }

  setTasksFromProjectId(porjectId){
    this
    .firestore.
    collection('task', ref => ref.where('projectID', '==', porjectId))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.tasks = collection;
      // console.log(this.tasks);
    } );
  }

  // checkpriortyName(hexcode: string) {
  //   if (#5fad5e) {
  //     return 'low';
  //   } else if (#5fad5e) {
  //     return low;
  //   }

  // }

  filterNames() {
    let filterd = this.projects.filter( projects => projects['name'].toLowerCase().includes(this.search) );
    let list = document.getElementById('list');
    list.innerHTML = filterd;
  }

  // getcolortopriortyName() {
  //   switch (numberofpriority) {
  //     case '1':
  //     tasks['color'] =  '#8cb6ed';
  //      return 'low'
  //     case '2':
  // }

  // changepriority(numberofpriority: , arr, pos) {
  //   console.log('ready ?');
   
  //   switch (numberofpriority) {
  //     case '1':
  //   arr[pos]['background-color'] =  '#8cb6ed';
}
