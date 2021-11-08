import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

@Component({
  selector: 'app-archiv-chart',
  templateUrl: './archiv-chart.component.html',
  styleUrls: ['./archiv-chart.component.scss']
})

export class ArchivChartComponent implements OnInit {

  constructor() { }

  // const data = [];
  // const data2 = [];
  // let prev = 100;
  // let prev2 = 80;
  // for (let i = 0; i < 1000; i++) {
  //   prev += 5 - Math.random() * 10;
  //   data.push({x: i, y: prev});
  //   prev2 += 5 - Math.random() * 10;
  //   data2.push({x: i, y: prev2});
  // }

  // const totalDuration = 10000;
  // const delayBetweenPoints = totalDuration / data.length;
  // const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
  // const animation = {
  // x: {
  //   type: 'number',
  //   easing: 'linear',
  //   duration: delayBetweenPoints,
  //   from: NaN, // the point is initially skipped
  //   delay(ctx) {
  //     if (ctx.type !== 'data' || ctx.xStarted) {
  //       return 0;
  //     }
  //     ctx.xStarted = true;
  //     return ctx.index * delayBetweenPoints;
  //   }
  // },
  // y: {
  //   type: 'number',
  //   easing: 'linear',
  //   duration: delayBetweenPoints,
  //   from: previousY,
  //   delay(ctx) {
  //     if (ctx.type !== 'data' || ctx.yStarted) {
  //       return 0;
  //     }
  //     ctx.yStarted = true;
  //     return ctx.index * delayBetweenPoints;
  //   }
  // }


  ngOnInit(): void {
  }

  // @ViewChild('myChartCnv', { static: false }) myChartCnv: ElementRef | undefined;

  // // title = 'chars';
  // ctx: any;
  // myChart: any;

  // ngAfterViewInit(): void {

    

  //   this.ctx = this.myChartCnv?.nativeElement.getContext('2d');
  //   console.log(this.ctx);
  //   this.myChart = new Chart(this.ctx, {
  //     type: 'line',
  //     data: {
  //       datasets: [{
  //         borderColor: Utils.CHART_COLORS.red,
  //         borderWidth: 1,
  //         radius: 0,
  //         data: data,
  //       },
  //       {
  //         borderColor: Utils.CHART_COLORS.blue,
  //         borderWidth: 1,
  //         radius: 0,
  //         data: data2,
  //       }]
  //     },
  //     options: {
  //       animation,
  //       interaction: {
  //         intersect: false
  //       },
  //       plugins: {
  //         legend: false
  //       },
  //       scales: {
  //         x: {
  //           type: 'linear'
  //         }
  //       }
  //     }
  //   };
}

