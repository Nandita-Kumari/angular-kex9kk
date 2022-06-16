import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CarService,Car } from '../car.service';
import {PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-list-view1',
  templateUrl: './list-view1.component.html',
  styleUrls: ['./list-view1.component.css'],
 
 
})
export class ListView1Component implements OnInit {
  displayedColumns: string[] = ['name', 'model', 'yearOfRelease', 'color', 'brand'];
  // public dataSource:  Car[] = []; 
  dataSource = new  MatTableDataSource<Car>([]);

  @ViewChild('paginator') paginator! : MatPaginator;

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  constructor(private service: CarService) {
    this.dataSource.data=this.service.cars;
  

    this.dataSource.paginator = this.paginator;
   }

  

  ngOnInit() {

 } 

  

}