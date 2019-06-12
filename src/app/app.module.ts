import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { jqxPivotGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { jqxPivotDesignerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotdesigner';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingLargeComponent } from './data-binding-large/data-binding-large.component';
import { DesignerComponent } from './designer/designer.component';
import { GridTotalComponent } from './grid-total/grid-total.component';
import { CustomRenderingComponent } from './custom-rendering/custom-rendering.component';

@NgModule({
  declarations: [
    AppComponent,
    jqxPivotGridComponent,
    jqxPivotDesignerComponent,
    PivotgridComponent,
    DataBindingComponent,
    DataBindingLargeComponent,
    DesignerComponent,
    GridTotalComponent,
    CustomRenderingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
