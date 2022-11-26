import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'node_modules/chart.js';


Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart(){
    const chartConsumption = new Chart("barchart_Consumption",{
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

    const chartPurchase = new Chart("barchart_Purchase", {
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
