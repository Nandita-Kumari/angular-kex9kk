import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export interface Car {
  name: string;
  model: string;
  yearOfRelease: number;
  brand: string;
  color: string;
}

@Injectable()
export class CarService {
  cars: Car[] = [];

  constructor() {
   
    for (var i = 0; i < 10000; i++) {
      this.cars.push(this.getRandomObject());
    }
    console.log(this.cars);
  }

  getRandomObject() {
    return {
      name: faker.name.findName(),
      model: faker.git.branch(),
      yearOfRelease: faker.datatype.number({
        min: 2000,
        max: 2020,
      }),
      brand: faker.lorem.word(),
      color: faker.color.human(),
    };
  }
}