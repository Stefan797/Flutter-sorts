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
  nextcode: any;
  displayedColumns: string[] = ['Created', 'State', 'number', 'text'];
  data = [
    {
      text: 'Hallo ',
      state: 'Done',
      number: '1',
      title: 'Task 1'
    }
  ]
  date = new Date();
  
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

  setTasksFromProjectId(projectId){
    this
    .firestore.
    collection('task', ref => ref.where('projectID', '==', projectId))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.tasks = collection;
       
      // console.log(this.tasks);
    } );

    this.date = this.tasks['creationdate'];
    
    this.date.getMonth();
    this.nextcode = this.tasks['color'];
    this.checkPriorityName(this.nextcode);
  }

  checkPriorityName(nextCode: any) {
    if(nextCode == '#5FAD5E') {
      return 'low';
    } else
    if(nextCode == '#76b09c') {
      return 'soon';
    } else
    if(nextCode == '##d60404') {
      return 'high';
    } else
    if(nextCode == '#5FAD5E') {
      return 'veryurgent';
    } else 
      return 'x';
    
  }

  // <div class="changeprioritylow" (click)="changeColor('#5fad5e')"></div>
  //   <!-- (click)="changeColor('#e9e9e9')" -->
  //   <div class="changeprioritysoon" (click)="changeColor('#76b09c')"></div>
  //   <div class="changepriorityhigh" (click)="changeColor('#f78205')"></div>
  //   <div class="changepriorityveryurgent" (click)="changeColor('#d60404')"></div>

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
