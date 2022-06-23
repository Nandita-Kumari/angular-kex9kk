import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MaterialExampleModule} from '../material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatNativeDateModule } from '@angular/material/core';
// import { HttpClientModule } from '@angular/common/http';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { CarService } from './car.service';
// import { DataSource } from '@angular/cdk/collections';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TableVirtualScrollModule} from 'ng-table-virtual-scroll';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TableVirtualScrollModule,
    MatProgressBarModule
  ],

  declarations: [AppComponent, routingComponents, DetailViewComponent],
  bootstrap: [AppComponent],
  providers: [CarService],
})
export class AppModule {}
