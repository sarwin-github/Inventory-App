import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-total',
  templateUrl: './warehouse-total.component.html',
  styleUrls: ['./warehouse-total.component.scss']
})
export class WarehouseTotalComponent implements OnInit {
	@Input() warehouseTotal: any;
  	constructor() { }

  	ngOnInit(): void {
  	}

}
