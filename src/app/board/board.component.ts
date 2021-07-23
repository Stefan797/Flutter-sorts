import { Component, OnInit } from '@angular/core';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from  '@angular/cdk/drag-drop' ;
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  ideas = [];
  todo = [];
  inprogress = [];
  testing = [];
  done = [];


  adjustwidth = true;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // checkforcontainer() {
    //    this.adjustwidth == true;
    //    draganddrop-container.setAttribute("style", "color:red; border: 1px solid blue;");

       
    // }
  }

  openDialog() {
    this.dialog.open(CreateTicketComponent);
  }

  



}
