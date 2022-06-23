import { Component, OnInit } from '@angular/core';
import { CarService,Car } from '../car.service';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';



@Component({
  selector: 'app-list-view2',
  templateUrl: './list-view2.component.html',
  styleUrls: ['./list-view2.component.css']
})
export class ListView2Component implements OnInit {
  displayedColumns: string[] = ['name', 'model', 'yearOfRelease', 'color', 'brand'];
  // public dataSource:  Car[] = []; 
  dataSource = new TableVirtualScrollDataSource<Car>([]);


  constructor(private service: CarService) { 
    this.dataSource.data=this.service.cars;
  }
  
  ngOnInit() {
  }

  isLastRow(index: number, element: Car){
    console.log(index);
    if(this.dataSource.data.length>0){
      const lastIndex=this.dataSource.data.length -1;
      if(this.dataSource.data.length === lastIndex){
        return true;
      }else{
        return false;
      }
  }

  }
}