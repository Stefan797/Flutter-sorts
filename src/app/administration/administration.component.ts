import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { ResultFunc } from 'rxjs/internal/observable/generate';

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
  prioritycode: any;
  displayedColumns: string[] = ['Created', 'State', 'number', 'text'];
  myControl = new FormControl();
  currentprojectID: string;
  input = document.getElementById("myInput");
 
  constructor(private router: Router, private route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this
    .firestore
    .collection('projects', ref => ref. where("author", "==", this.userId ))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.projects = collection;
    } );
  }

  setTasksFromProjectId(projectId){
    this
    .firestore
    .collection('task', ref => ref.where('projectID', '==', projectId))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.tasks = collection.filter(e => e['category'] === 'archiv'); // !!! Wichtig 
      this.tasks.forEach((task, i) => {
        task['number'] = i;
      });
    } );
  }
  
  checkPriorityName(nextCode: string) {
    if(nextCode == '#5FAD5E') {
      return 'low';
    } else
    if(nextCode == '#76b09c') {
      return 'soon';
    } else
    if(nextCode == '#d60404') {
      return 'high';
    } else
    if(nextCode == '#5FAD5E') {
      return 'veryurgent';
    } else 
      return 'x';
  }
}

/// -------------------------------------------------------------------------------


// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

   
    

