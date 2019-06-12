import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingLargeComponent } from './data-binding-large/data-binding-large.component';
import { DesignerComponent } from './designer/designer.component';
import { GridTotalComponent } from './grid-total/grid-total.component';
import { CustomRenderingComponent } from './custom-rendering/custom-rendering.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pivotgrid' },
  { path: 'pivotgrid', component: PivotgridComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'data-binding-large', component: DataBindingLargeComponent },
  { path: 'designer', component: DesignerComponent },
  { path: 'grid-total', component: GridTotalComponent },
  { path: 'custome-rendering', component: CustomRenderingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
