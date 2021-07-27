import { Component, OnInit } from '@angular/core';

declare var webkitSpeechRecognition: any;
declare var webkitSpeechGrammarList: any;

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  isRecording = true;


  // SpeechRecognition = SpeechRecognition;
  // SpeechGrammarList = SpeechGrammarList;
  // SpeechRecognitionEvent = SpeechRecognitionEvent;
  colors = ['aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
  grammar = '#JSGF V1.0; grammar colors; public <color> = ' + this.colors.join(' | ') + ' ;'
  recognition =  new webkitSpeechRecognition();
  speechRecognitionList = new webkitSpeechGrammarList();

  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;

  constructor() { }

  init() {

    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
    });
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log("Speech recognition started")
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log("End speech recognition")
      } else {
        this.wordConcat()
        this.recognition.start();
      }
    });
  }
  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat()
    this.recognition.stop();
    console.log("End speech recognition")
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

  ngOnInit(): void {
   this.init();
    // this.recognition.grammars = this.speechRecognitionList;
    // this.recognition.continuous = false;
    // this.recognition.lang = 'en-US';
    // this.recognition.interimResults = false;
    // this.recognition.maxAlternatives = 1;
    // this.recognition.onresult = function (event) {
    //   // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    //   // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    //   // It has a getter so it can be accessed like an array
    //   // The first [0] returns the SpeechRecognitionResult at the last position.
    //   // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    //   // These also have getters so they can be accessed like arrays.
    //   // The second [0] returns the SpeechRecognitionAlternative at position 0.
    //   // We then return the transcript property of the SpeechRecognitionAlternative object
    //   var text = event.results[0][0].transcript;
    //   console.log('Du hast folgendes gesagt:', text);
    //   console.log('Confidence: ' + event.results[0][0].confidence);
    // }
    // this.recognition.onnomatch = function (event) {
    //   console.warn(event);
    //   //this.diagnostic.textContent = "I didn't recognise that color.";
    // }
  }

  onNoClick() {

  }

}

