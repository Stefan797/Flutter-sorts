import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { BoardComponent } from '../board/board.component';

declare var webkitSpeechRecognition: any;


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  isRecording = false;
  recognition =  new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  tempWords;
  newTicketText  = '';
  smartphonemenu: boolean; 

  constructor() { }

  init() {
    this.recognition.interimResults = true; 
    this.recognition.lang = 'en-US';
    this.recognition.lang = 'de-DE';
    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      // console.log(transcript);
      this.newTicketText = transcript;
    });
  }

  start() {
    this.isRecording = true;
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        
      }
    });
  }
  stop() {
    this.isRecording = false;
    this.isStoppedSpeechRecog = true;
    this.recognition.stop();
  }

  ngOnInit(): void {
   this.init();
  }
    
  // closedialog() {
  //   // this.dialogRef.close();
  // }


}

