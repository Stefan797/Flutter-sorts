import { Component, OnInit } from '@angular/core';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditTicketComponent } from '../edit-ticket/edit-ticket.component';

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
  allProjectTasks: any[];
  smartphonemenu: boolean; 
  leftKeyPressed: boolean;
  rightKeyPressed: boolean;
  rightPos = 20;

  constructor(public firestore: AngularFirestore, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (window.screen.width <= 600) {
      this.smartphonemenu = true;
    }
    this.projectID = this.route.snapshot.paramMap.get('id');
    this
    .firestore
    .collection('task', ref => ref. where("projectID", "==", this.projectID ))
    .valueChanges({ idField: 'customIdName'})
    .subscribe((result) => {
       this.allProjectTasks = result;
       this.ideas = this.allProjectTasks.filter ( task => task.category == "ideas");
       this.todo = this.allProjectTasks.filter ( task => task.category == "todo");
       this.done = this.allProjectTasks.filter ( task => task.category == "done");
       this.review = this.allProjectTasks.filter ( task => task.category == "review");
      //  console.log(this.allProjectTasks);
    });

    setInterval(() => {
      if(this.rightKeyPressed) {
        let htmlContainer: any =  document.getElementById('scrolling_div');
        htmlContainer.scrollRight = this.rightPos;
        this.rightPos += 20;
      }
    }, 100);

    localStorage.setItem('activeBoard', this.projectID);
  }

  opentask(task) {
    const dialogRef = this.dialog.open(EditTicketComponent);
    dialogRef.componentInstance.task = task;
    dialogRef.afterClosed().subscribe(result => {
      
      if (task) {
        // this.firestore.collection('task').add(newTask);
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTicketComponent);
    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        let newTask = {text: result, projectID: this.projectID, category: "ideas"};
        this.firestore.collection('task').add(newTask);
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
        // console.log('Verschiebe Element zu', category);
        
        let currentCard = event.container.data[event.currentIndex];
        currentCard['category'] = category;
        let id = currentCard['customIdName'];
        this.firestore.collection('task')
        .doc(id)
        .set(currentCard)
        .then( (msg) => {
          // console.log('success', msg);
        }).catch( (err) => {
          console.log('error', err);
        });
        // console.log('Element das wir updaten wollen:', currentCard);
    }
  }

  contentmoveleft() {
    this.leftKeyPressed = true;
  }

  contentmoveright() {
    this.rightKeyPressed = true;
  }
}







