import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-items',
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit {
	@Input() warehouseItems: any;
  	constructor() { }

  	ngOnInit(): void {
  	}

}
