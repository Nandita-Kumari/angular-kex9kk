import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {MaterialExampleModule} from '../material.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { CarService } from './car.service';
import { DataSource } from '@angular/cdk/collections';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSidenavModule, BrowserAnimationsModule, MatListModule, MatIconModule,AppRoutingModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],

  declarations: [ AppComponent, routingComponents  ],
  bootstrap:    [ AppComponent ],
  providers: [CarService],
})
export class AppModule { }
