import { Component, OnInit } from '@angular/core';

declare var webkitSpeechRecognition: any;
// declare var webkitSpeechGrammarList: any;

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  isRecording = false;


  // SpeechRecognition = SpeechRecognition;
  // SpeechGrammarList = SpeechGrammarList;
  // SpeechRecognitionEvent = SpeechRecognitionEvent;

  // colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
  // grammar = '#JSGF V1.0; grammar colors; public <color> = ' + this.colors.join(' | ') + ' ;'
  recognition =  new webkitSpeechRecognition();
  // speechRecognitionList = new webkitSpeechGrammarList();

  isStoppedSpeechRecog = false;
  // public text = '';
  tempWords;
  newTicketText  = '';

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
    // console.log("Speech recognition started");
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        // console.log("End speech recognition");
      } else {
        // this.wordConcat();
        // this.recognition.start();
      }
    });
  }
  stop() {
    this.isRecording = false;
    this.isStoppedSpeechRecog = true;
    // this.wordConcat();
    this.recognition.stop();
    // console.log("End speech recognition");
  }

  // wordConcat() {
  //   // this.text = this.text + ' ' + this.tempWords + '.'; 
  //   this.tempWords = '';
  // }

  ngOnInit(): void {
   this.init();
  }
    
  onNoClick() {
    
  }


}

