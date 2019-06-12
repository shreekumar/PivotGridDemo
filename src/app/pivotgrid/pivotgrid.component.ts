import { Component, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { jqxPivotGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid";
import { jqxPivotDesignerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotdesigner';

@Component({
	selector: 'app-pivotgrid',
	templateUrl: './pivotgrid.component.html',
	styleUrls: ['./pivotgrid.component.css']
})
export class PivotgridComponent {

	@ViewChild(jqxPivotGridComponent, { static: false }) myPivotGrid: jqxPivotGridComponent;
	@ViewChild(jqxPivotDesignerComponent, { static: false }) pivotDesigner: jqxPivotDesignerComponent;

	//@ViewChild("hiddenField", {static:true}) block: ElementRef;

	constructor() {
		this.pivotDataSource = this.createPivotDataSource();
	}

	ngAfterViewInit(): void {
		let pivotGridComponent = this.myPivotGrid;
		let pivotGridInstance = pivotGridComponent.getInstance();

		this.pivotDesigner.target(pivotGridInstance);
		this.pivotDesigner.refresh();
		this.cells = this.myPivotGrid.getPivotCells();
	}

	getWidth(): any {
		if (document.body.offsetWidth < 400) {
			return '50%';
		}
		return 400;
	}

	pivotDataSource: null;

	public cells: jqwidgets.PivotGridCells;
	public text: string = '';

	createPivotDataSource(): null {
		// prepare sample data
		let data = new Array();

		let firstNames =
			[
				"Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars"
			];

		let lastNames =
			[
				"Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson"
			];

		let productNames =
			[
				"Caffe Espresso", "Caffe Latte"
			];

		let priceValues =
			[
				"2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
			];

		for (let i = 0; i < 500; i++) {
			let row = {};
			let productindex = Math.floor(Math.random() * productNames.length);
			let price = parseFloat(priceValues[productindex]);
			let quantity = 1 + Math.round(Math.random() * 10);

			row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
			row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
			row["productname"] = productNames[productindex];
			row["price"] = price;
			row["quantity"] = quantity;
			row["total"] = price * quantity;

			data[i] = row;
		}

		// create a data source and data adapter
		let source =
		{
			localdata: data,
			datatype: "array",
			datafields:
				[
					{ name: 'firstname', type: 'string' },
					{ name: 'lastname', type: 'string' },
					{ name: 'productname', type: 'string' },
					{ name: 'quantity', type: 'number' },
					{ name: 'price', type: 'number' },
					{ name: 'total', type: 'number' }
				]
		};

		let dataAdapter = new jqx.dataAdapter(source);
		dataAdapter.dataBind();

		// create a pivot data source from the dataAdapter
		let pivotDataSource = new jqx.pivot(
			dataAdapter,
			{
				pivotValuesOnRows: false,
				totals: { rows: { subtotals: true, grandtotals: true }, columns: { subtotals: false, grandtotals: true } },
				rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
				columns: [{ dataField: 'productname' }],
				values: [
					{ dataField: 'price', 'function': 'sum', text: 'sum', width: NamedNodeMap, formatSettings: { prefix: '$', decimalPlaces: 2 } },
					{ dataField: 'price', 'function': 'count', text: 'count' },
					{ dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
				]
			}
		);

		return pivotDataSource;
	}

	Pivotcellclick(event: any): void {
		var t = new Date();
		var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
		this.text += '<strong>Row Text</strong>: ' + event.args.pivotRow.text + '<br/>';
		this.text += '<strong>Column Text</strong>: ' + event.args.pivotColumn.text + '<br/>';
		this.text += '<strong>Parent Column Text</strong>: ' + event.args.pivotColumn.parentItem.text + '<br/>';
		//var cells = this.myPivotGrid.getPivotCells();
		this.text += '<strong>Cell Text</strong>: ' + this.cells.getCellValue(event.args.pivotRow, event.args.pivotColumn).value + '<br/>';
		//this.eventsLog.val(this.text);
		this.text += "---------------------------------<br/>";
	}

	Pivotitemclick(event: any): void {
		this.text += "<strong>Column text</strong> :" + event.args.pivotItem.adapterItem.text + "<br/>";
		if (event.args.pivotItem.parentItem !== null) {
			this.text += "<strong>Parent column text</strong> :" + event.args.pivotItem.parentItem.adapterItem.text + "<br/>";
		}
		else {
			this.text += "<strong>Parent column text</strong> : N/A<br/>";
		}
		this.text += "---------------------------------<br/>";
	}

	Pivotitemexpanded(event: any): void {
		this.text += "<strong>Expanded column</strong> :" + event.args.pivotItem.adapterItem.text + "<br/>";
		this.text += "---------------------------------<br/>";
	}

	clearLog() {
		this.text = "";
	}
}
