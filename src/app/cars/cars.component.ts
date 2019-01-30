import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  car: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCars()
      .subscribe(data => {
      this.car = data;
      console.log(this.car);
    });
  }
}
