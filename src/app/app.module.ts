import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { jqxPivotGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid";
import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    jqxPivotGridComponent,
    jqxTextAreaComponent,
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
