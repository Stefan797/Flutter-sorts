import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-archiv-chart',
  templateUrl: './archiv-chart.component.html',
  styleUrls: ['./archiv-chart.component.scss']
})

export class ArchivChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('myChartCnv', { static: false }) myChartCnv: ElementRef | undefined;

  title = 'chars';
  ctx: any;
  myChart: any;

  ngAfterViewInit(): void {

    

    this.ctx = this.myChartCnv?.nativeElement.getContext('2d');
    console.log(this.ctx);
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

