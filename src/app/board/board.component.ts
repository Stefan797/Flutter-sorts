import { Component, OnInit } from '@angular/core';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from  '@angular/cdk/drag-drop' ;
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


// import { type } from 'os';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  ideas = [];
  todo = [];
  done = [];
  review = [];
  projectID: string;
  // firestore: any;
  allProjectTasks: any[];
  smartphonemenu: boolean; 

  constructor(public firestore: AngularFirestore, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  

  ngOnInit(): void {
    if (window.screen.width <= 600) { // 768px portrait
      this.smartphonemenu = true;
    }
    this.projectID = this.route.snapshot.paramMap.get('id');
    // console.log(this.projectID);
    // let projectID = this.getProjectId(); // 12903jd01j80d21zu129n20hns10
    this
    .firestore
    .collection('task', ref => ref. where("projectID", "==", this.projectID ))
    .valueChanges({ idField: 'customIdName'})
    .subscribe((result) => {
      //  console.log(this.projectID);
       this.allProjectTasks = result;
       this.ideas = this.allProjectTasks.filter ( task => task.category == "ideas");
       this.todo = this.allProjectTasks.filter ( task => task.category == "todo");
       this.done = this.allProjectTasks.filter ( task => task.category == "done");
       this.review = this.allProjectTasks.filter ( task => task.category == "review");
       console.log(this.allProjectTasks);
    });
    // this.firestore.get('/tasks', where('project', '==', projectID))

    
    
  }

  openDialog() {
    //this.dialog.open(CreateTicketComponent);
    const dialogRef = this.dialog.open(CreateTicketComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.ticketText = result;
      // console.log(result);
      if (result) {
        let newTask = {text: result, projectID: this.projectID, category: "ideas"};
        // this.ideas.push(newTask);
        this.firestore.collection('task').add(newTask);

        // result = '';
      }
      
    });
  }

  drop(event: CdkDragDrop<string[]>, category) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
        console.log('Verschiebe Element zu', category);
        
        let currentCard = event.container.data[event.currentIndex];
        currentCard['category'] = category;

        let id = currentCard['customIdName'];


        this.firestore.collection('task')
        .doc(id)
        .set(currentCard)
        .then( (msg) => {
          console.log('success', msg);
        }).catch( (err) => {
          console.log('error', err);
        });
        console.log('Element das wir updaten wollen:', currentCard);
        // this.todo = event.container.data[event.currentIndex];
        

    }

    // console.log('Show json', event);
  }

  writtenedittask() {
    console.log('Ticket is delete !');

  }

  

  deleteTicket() {
    console.log('Ticket is delete !');
  }

  // changepriority(numberofpriority: , arr, pos) {
  //   console.log('ready ?');
  //   switch (numberofpriority) {
  //     case '1':
  //   arr[pos]['background-color'] =  '#8cb6ed';
  //         return '#8cb6ed';
  //     case '2':
  //         return '#b5c4b9';
  //     case '3':
  //         return '#e67e85';
  //     case '4':
  //         return '#e8d9d8';
  //   }
  // }


}







