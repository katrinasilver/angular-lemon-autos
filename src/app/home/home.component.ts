import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Object;
  // search: String;

  constructor(private data: DataService) { }

  // findCar() {
  //   return [this.cars].filter(car =>
  //     Object.values(car).reduce((i, c) => i || (typeof c === 'string' && c.toLowerCase()
  //       .includes(this.search.toLowerCase())), false)
  //   );
  // }

  toDollah(value) {
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'USD' });
  }

  discountedPrice(price, discount) {
    return +(price - (price * discount));
  }

  lowMilesBadge(mileage) {
    return mileage < 40000 ? 'Low Miles!' : '';
  }

  clearanceBadge(discountedPrice) {
    return discountedPrice < 2500 ? 'Clearance!' : '';
  }

  financingBadge(value) {
    return value === true ? 'Financing OK' : '';
  }

  priceDropBadge(discount) {
    return discount >= .25 ? 'Huge Price Drop!' : '';
  }

  ngOnInit() {
    this.data.getCars().subscribe(data => {
      this.cars = data;
    });
  }
}
