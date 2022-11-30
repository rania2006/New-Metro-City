import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables} from 'node_modules/chart.js';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartConsumption;
  chartPurchase;
  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  RenderChart(){
     this.chartConsumption = new Chart("barchart_Consumption",{
      type: 'bar',
      data: {
        labels: ['January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
        datasets: [{
          label: 'petrol',
          data: [65, 59,46,54,37,36,36,54,11,22,44,65],
          backgroundColor: [
            'rgba(233,136,136,1)',
          ],
          borderWidth: 1
        },
        {
          label: 'diesel',
          data: [65, 43,41,7,89,65,46,47,38,74,63,77],
          backgroundColor: [
            'rgba(127,137,231,1)', 
          ],
          borderWidth: 1
        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.chartPurchase = new Chart("barchart_Purchase", {
      type: 'bar',
      data: {
        labels: [
          'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'],
        datasets: [{
          label: 'petrol',
          data: [65, 19, 56, 78,12,46,54,50,36,36,54,11],
          backgroundColor: [
            'rgba(233,136,136,1)',
          ],
          borderWidth: 1
        },
        {
          label: 'diesel',
          data: [30, 50,56,4,3,2,12,34,56,78,9,22],
          backgroundColor: [
            'rgba(127,137,231,1)', 
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
