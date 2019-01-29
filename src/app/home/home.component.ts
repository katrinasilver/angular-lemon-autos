import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCars().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    });
  }
}
