import { Component, OnInit } from '@angular/core';
import { DashboardData } from '../../../environments/environment';
import { ChartType, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';

interface mapVal {
  total: number ;
  label: Array<String>;
  labelDate: Array<Number>;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  data: any;
  lat = 30.5937;
  lng = 108.9629;
  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  mapData: mapVal;
  doughnutChartType: ChartType = 'doughnut';
  pieChartLegend: boolean = true;
  pieChartData = [];

  ngOnInit(): void {
    this.data = DashboardData;
  }

  returnZero() {
    return 0;
  }

  getMapVal(dataPoint: object): mapVal {
    for (let val in dataPoint) {
      this.mapData.label.push(val);
      this.mapData.labelDate.push(dataPoint[val]);
      this.mapData.total += dataPoint[val];
    }
    return this.mapData;
  }
}
