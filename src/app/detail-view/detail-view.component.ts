import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { CarService,Car } from '../car.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  detailForm: FormGroup;

  constructor(private fb: FormBuilder, private service: CarService) { }

  ngOnInit() {
    this.detailForm = this.fb.group({
      name: ['',[Validators.required, Validators.maxLength(20)]],
      brand: ['',[Validators.required,Validators.maxLength(20)]],
       yearOfRelease: ['',[Validators.required, yearValidation]],
      color: ['', [Validators.required]],
       model: ['', [Validators.required, Validators.maxLength(20)]],
      })
    
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.detailForm.controls[controlName].hasError(errorName);
  }
  onSubmit(): void{
    console.log(this.detailForm.value);
  }


 
 

}
function yearValidation(control:AbstractControl):{[key:string]:any}| null {
  const yearOfRelease:number = control.value;
  if(yearOfRelease > 2000 ){
    return null;
  }else{
    return{'Year': true};
  }

}





function nameValidation(control:AbstractControl):{[key:string]:any}|null{
  const name:string = control.value;
  const found = this.cars.find((element)=> element.name===control.value)
    // return found;
  if(found === control.value){
    return{'Name': true};
  }else{
    return null;
  }
}

