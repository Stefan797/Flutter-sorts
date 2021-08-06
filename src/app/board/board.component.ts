import { Component, OnInit } from '@angular/core';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from  '@angular/cdk/drag-drop' ;
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
// import { type } from 'os';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  ideas = [
   
  ];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  review = [
    'Get up',
    'Brush teeth'
  ];


  // adjustwidth = true;
  // ticketText: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    //this.dialog.open(CreateTicketComponent);
    const dialogRef = this.dialog.open(CreateTicketComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.ticketText = result;
      // console.log(result);
      this.ideas.push(result);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  

  deleteTicket() {
    console.log('Ticket is delete !');
  }

  // changepriority(numberofpriority: , arr, pos) {
  //   console.log('ready ?');
  //   switch (numberofpriority) {
  //     case '1':
 //    arr[pos]['color'] =  '#8cb6ed';
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







