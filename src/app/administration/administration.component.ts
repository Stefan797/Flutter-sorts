import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  @ViewChild('myChart') myDiv: ElementRef;

  // myChart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [{
  //           label: '# of Votes',
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //               'rgba(255, 99, 132, 0.2)',
  //               'rgba(54, 162, 235, 0.2)',
  //               'rgba(255, 206, 86, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(153, 102, 255, 0.2)',
  //               'rgba(255, 159, 64, 0.2)'
  //           ],
  //           borderColor: [
  //               'rgba(255, 99, 132, 1)',
  //               'rgba(54, 162, 235, 1)',
  //               'rgba(255, 206, 86, 1)',
  //               'rgba(75, 192, 192, 1)',
  //               'rgba(153, 102, 255, 1)',
  //               'rgba(255, 159, 64, 1)'
  //           ],
  //           borderWidth: 1
  //       }]
  //   },
  //   options: {
  //       scales: {
  //           y: {
  //               beginAtZero: true
  //           }
  //       }
  //   }
  // });





  projects: any;
  userId: any;
  search: any;
  tasks: any;
  prioritycode: any;
  displayedColumns: string[] = ['Created', 'State', 'number', 'text'];
  myControl = new FormControl();
  
  // date = new Date();
  input = document.getElementById("myInput");

  constructor(private router: Router, private route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    
    this.myControl.valueChanges.subscribe( (result) => {
      console.log(result);   
      this.projects.filter( projects => projects['name'].toLowerCase().includes(result) );
    });



    this
    .firestore.
    collection('projects')
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.projects = collection;
      // console.log(this.projects);
    } );
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);

    this.setTasksFromProjectId('VOeNDTUFlCT6vVwjXdgp'); // läd project ID
  }

  setTasksFromProjectId(projectId){
    this
    .firestore
    .collection('task', ref => ref.where('projectID', '==', projectId))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.tasks = collection; //.filter(e => e['category'] === 'archiv'); !!! Wichtig 
      this.tasks.forEach((task, i) => {
        task['number'] = i;
      });
      // console.log(this.tasks);
      // this.date = this.tasks['creationdate'];
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

   
    

