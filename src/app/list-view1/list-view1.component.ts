import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-view1',
  templateUrl: './list-view1.component.html',
  styleUrls: ['./list-view1.component.css'],
 
})
export class ListView1Component implements OnInit {

  constructor(private service: CarService) {
    console.log(this.service.cars.length);
   }

  ngOnInit() {
  }

}