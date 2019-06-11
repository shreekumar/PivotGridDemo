import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pivotgrid' },
  { path: 'pivotgrid', component: PivotgridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
