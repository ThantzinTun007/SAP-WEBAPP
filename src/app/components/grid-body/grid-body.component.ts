import { Component, AfterViewInit } from '@angular/core';
import { dosData } from './dos-data';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grid-body',
  templateUrl: './grid-body.component.html',
  styleUrl: './grid-body.component.css',
})
export class GridBodyComponent implements AfterViewInit {
  dos = dosData;
  categoryDef = 'Tesk';

  activeDos(category: any) {
    this.categoryDef = category;
  }

  ngAfterViewInit() {
    this.initializeCharts();
  }

  initializeCharts() {
    // Chart 1

    new Chart('chart1', {
      type: 'bar',
      data: {
        labels: ['Apr 2023', 'May 2023', 'Jun 2023'],
        datasets: [
          {
            label: 'Sales Volume',
            data: [10000, 20000, 150000],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: 'Profit Margin',
            data: [30, 50, 80],
            type: 'line',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false,
          },
        ],
      },
    });

    // Chart 2
    new Chart('chart2', {
      type: 'line',
      data: {
        labels: ['100-149', '150-199', '200-249'],
        datasets: [
          {
            label: 'Materials Value',
            data: [2500, 2000, 1500],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
          {
            label: 'Number of Materials',
            data: [1, 0.8, 0.5],
            type: 'bar',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
          },
        ],
      },
    });

    // Chart 3
    new Chart('chart3', {
      type: 'line',
      data: {
        labels: ['1', '2', '3'],
        datasets: [
          {
            label: 'PO Net Amount',
            data: [0, 1500000, 0],
            borderColor: 'rgba(255, 206, 86, 1)',
            fill: false,
          },
          {
            label: 'Planned Spend',
            data: [0, 800000, 0],
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false,
          },
        ],
      },
    });
  }
}
