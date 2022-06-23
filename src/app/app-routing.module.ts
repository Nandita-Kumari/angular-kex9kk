import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ListView1Component } from './list-view1/list-view1.component';
import { ListView2Component } from './list-view2/list-view2.component';



const routes: Routes = [
  {path:'list-view1', component: ListView1Component},
  {path:'list-view2', component: ListView2Component},
  {path: 'detail-view',  component: DetailViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ListView1Component, ListView2Component, DetailViewComponent]