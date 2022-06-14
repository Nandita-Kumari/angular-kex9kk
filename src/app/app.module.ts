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

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatSidenavModule, BrowserAnimationsModule, MatListModule, MatIconModule,AppRoutingModule ],
  declarations: [ AppComponent, routingComponents  ],
  bootstrap:    [ AppComponent ],
  providers: [CarService],
})
export class AppModule { }
