import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  projects: any;
  userId: any;
  search: any;
  tasks: any;
  prioritycode: any;
  displayedColumns: string[] = ['Created', 'State', 'number', 'text'];
  myControl = new FormControl();
  // data = [
  //   {
  //     text: 'Hallo ',
  //     state: 'Done',
  //     number: '1',
  //     title: 'Task 1'
  //   }
  // ]
  // date = new Date();
  input = document.getElementById("myInput");

   
   

  names: ['Junus', 'Juus', 'Juns', 'Juus', 'Juns', 'Juns'];
  // filteredOptions: Observable<User[]>;
  
  constructor(private router: Router, private route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    // this.input.addEventListener("keydown", function(event) {
  
    //   if (e.key === 13) {
    //   event.preventDefault();
     
      
    //  }
    // });
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );
    this
    .firestore.
    collection('projects')
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.projects = collection;
      // console.log(this.projects);
    } );
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);

    this.setTasksFromProjectId('VOeNDTUFlCT6vVwjXdgp'); // läd project ID
  }

  setTasksFromProjectId(projectId){
    this
    .firestore
    .collection('task', ref => ref.where('projectID', '==', projectId))
    .valueChanges({idField: 'customIdName'})
    .subscribe( collection => {
      this.tasks = collection; //.filter(e => e['category'] === 'archiv'); !!! Wichtig 
      this.tasks.forEach((task, i) => {
        task['number'] = i;
      });
      // console.log(this.tasks);
      // this.date = this.tasks['creationdate'];
      // this.prioritycode = this.tasks['color'];

      // console.log('prioriryCode', this.prioritycode);
    } );


  }

  // checktheProjectID() {
  //    // return projectID
  // }

  checkPriorityName(nextCode: string) {
    if(nextCode == '#5FAD5E') {
      return 'low';
    } else
    if(nextCode == '#76b09c') {
      return 'soon';
    } else
    if(nextCode == '#d60404') {
      return 'high';
    } else
    if(nextCode == '#5FAD5E') {
      return 'veryurgent';
    } else 
      return 'x';
    
  }

  // private _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }

  filterNames() {
     let filterd = this.projects.filter( projects => projects['name'].toLowerCase().includes(this.search) );
    // let list = document.getElementById('list');
    // list.innerHTML = filterd;
  }

//   const chartValues = [{value: 25},{value: 60},{value: 45},{value: 50},{value: 40}]

// function formatLineChartData(values, chartHeight) {

//   //divide chart size by total number of points to get length of triangle base. That becomes the left offset for each new point
//   //subtract previous point height from new point height to get the rise of the triangle. That becomes the bottom offset for the new point.
//   //use base squared + rise squared to find the length of the hypotenuse. That becomes the width of the line to draw.
//   //use Math.asin(base / hypotenuse) [then convert the radians to degrees] to find the degree angle to rotate the line to.
//   //Multiply the rotation angle by -1 if it needs to rise to meet the next point.
  
//   const widgetSize = chartHeight;
//   const pointSize = 16;

//   const base = (widgetSize - pointSize / 2 ) / values.length;

//   let sortedValues = sortValues([...values]);

//   const topMostPoint = sortedValues[0].value;
//   let leftOffset = pointSize; //padding for left axis labels
//   let nextPoint = 0;
//   let rise = 0;
//   let cssValues = [];

//   for (var i=0, len=values.length-1; i<len; i++) {

//     var currentValue = {
//       left: 0,
//       bottom: 0,
//       hypotenuse: 0,
//       angle: 0,
//       value: 0
//     };

//     currentValue.value = values[i].value;
//     currentValue.left = leftOffset;
//     leftOffset += base;

//     currentValue.bottom = (widgetSize - pointSize) * (currentValue.value / topMostPoint);
//     nextPoint = (widgetSize - pointSize) * (values[i+1].value / topMostPoint);

//     rise = currentValue.bottom - nextPoint;
//     currentValue.hypotenuse = Math.sqrt((base * base) + (rise * rise));
//     currentValue.angle = radiansToDegrees(Math.asin(rise / currentValue.hypotenuse));

//     cssValues.push(currentValue);
//   }

//   var lastPoint = {
//     left: leftOffset,
//     bottom: (widgetSize - pointSize) * (values[values.length - 1].value / topMostPoint),
//     hypotenuse: 0,
//     angle: 0,
//     value: values[values.length - 1].value
//   };

//   cssValues.push(lastPoint);

//   return cssValues;
// }

// const sortValues = values => values.sort((a, b) => b.value - a.value)
    
// const radiansToDegrees = (rads) => rads * (180 / Math.PI)

// const sum = (total, value) => total + value.value


// function render(data, container) {
//   data.forEach((item) => {
//     let markup = createListItem(item);
//     let listItem = document.createElement("li");
//     listItem.style.cssText = `--x: ${item.left}px; --y: ${item.bottom}px`;
//     listItem.innerHTML = markup;
//     container.appendChild(listItem);
//   });
// }

// function createListItem(item) {
//   return `
//   <div class="data-point" data-value="${item.value}"></div>
//   <div class="line-segment" style="--hypotenuse: ${item.hypotenuse}; --angle:${item.angle};"></div>
//   `;
// }

// render(formatLineChartData(chartValues, 200), document.getElementById('line-chart'))



/// -------------------------------------------------------------------------------


// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

   
    
}
