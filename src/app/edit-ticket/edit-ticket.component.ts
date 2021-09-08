import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

  task: any;

  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void {
    // console.log(this.task);
  }

  deletetask() {
    this
    .firestore
    .collection('task')
    .doc(this.task.customIdName)
    .delete();
  }

  // editwrittentask() {
  //   console.log('geändert!!!');
  // }

  changeColor(hexCode: any){
    console.log(hexCode);
    this.task['color'] = hexCode;
    this
    .firestore
    .collection('task')
    .doc(this.task['customIdName'])
    .set(this.task['color']);
    
  }

  // changepriority(numberofpriority: , arr, pos) {
   
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
