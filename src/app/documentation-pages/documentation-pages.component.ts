import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-documentation-pages',
  templateUrl: './documentation-pages.component.html',
  styleUrls: ['./documentation-pages.component.scss']
})
export class DocumentationPagesComponent implements OnInit, AfterViewInit {
  
  Screenshots = [];
  @ViewChild('cature') cature: ElementRef;

  // this.projectID = this.route.snapshot.paramMap.get('id');

  constructor(public firestore: AngularFirestore, private router: Router, private route: ActivatedRoute) { }

  ngAfterViewInit(){
    html2canvas( this.cature.nativeElement).then(canvas => {
      //document.body.appendChild(canvas);
      console.log(canvas);
    });
   
  }

  ngOnInit(): void {

   
  }

  openthecorrectdocumentationpage() {
    
  }

 


}
