import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

  task = {};

  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {

  }

  deletetask() {
    // this
    // .firestore
    // .collection('task')
  }

  // editwrittentask() {
  //   console.log('geändert!!!');
  // }

  // changeColor(hexCode){
  //   // Update Ticket in firebase
  // }

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
