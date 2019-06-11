import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { jqxPivotGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { jqxPivotDesignerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotdesigner';

@NgModule({
  declarations: [
    AppComponent,
    jqxPivotGridComponent,
    jqxPivotDesignerComponent,
    PivotgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
