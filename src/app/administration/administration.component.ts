import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  projectnames = ['Stefan'];


  constructor() { }

  ngOnInit(): void {
  }

  filterNames() {
    // let search = document.getElementById('search').value;
    // search = search.toLowerCase();
    // console.log(search);

    let list = document.getElementById('list');
    list.innerHTML = '';

    // for (let index = 0; index < this.projectnames.length; index++) {
    //     let name = this.projectnames[index];
    //     if (name.toLowerCase().includes(search)) {
    //         list.innerHTML += `<li>${name}</li>`;
    //     }
    // }
  }

  showprojectNames() {
    let list = document.getElementById('list');

    list.innerHTML = '';

    // for (let index = 0; index < this.projectnames.length; index++) {
    //     let name = this.projectnames[index];
    //     list.innerHTML += `<li>${name}</li>`;
    // }
  }

}
