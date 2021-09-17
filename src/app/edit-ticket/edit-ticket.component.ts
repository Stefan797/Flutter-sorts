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

  movetoArchiv(archiv: string) {
    this.task['category'] = archiv;
    this
    .firestore
    .collection('task')
    .doc(this.task.customIdName)
    .update(this.task);
  }
 
  deletetask() {
    this
    .firestore
    .collection('task')
    .doc(this.task.customIdName)
    .delete();
  }

  changeColor(hexCode: any){
    console.log(hexCode);
    this.task['color'] = hexCode;
    this
    .firestore
    .collection('task')
    .doc(this.task['customIdName'])
    .set(this.task);
  }
}
