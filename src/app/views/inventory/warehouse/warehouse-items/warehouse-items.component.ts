import { Component, OnInit, Input } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
@Component({
  selector: 'app-warehouse-items',
  animations: [mainAnimations],
  templateUrl: './warehouse-items.component.html',
  styleUrls: ['./warehouse-items.component.scss']
})
export class WarehouseItemsComponent implements OnInit {
	@Input() warehouseItems: any;
  	constructor() { }

  	public warehouseItemHeader;
  	public selectedColumns: any[];
  	public selectedItems: any[];
  	public listColumns: any[];
  	public density: number = 120;

  	ngOnInit(): void {
  		this.warehouseItemHeader = [
  			{ field: 'unreleasedAllocation', header: 'Unreleased Allocation', class: 'info-main' },
  			{ field: 'scheduledRelease', header: 'Scheduled Release', class: 'info-main' },
  			{ field: 'styleCode', header: 'Style Code', class: 'info-main' },
  			{ field: 'styleName', header: 'Style Name', class: 'info-main' },
  			{ field: 'priceStatus', header: 'Price Status' },
  			{ field: 'availableWHUnits', header: 'Available WH Units' },
  			{ field: 'allocatedUnits', header: 'Allocated Units' },
  			{ field: 'instoreWksCover', header: 'Instore Wks Cover' },
  			{ field: 'styleWksCover', header: 'Style Wks Cover' },
  			{ field: 'thisWeekUnitSold', header: 'This Week Unit Sold' },
  			{ field: 'lastWeekUnitsSold', header: 'Last Week Units Sold' },
  			{ field: 'ageWeeks', header: 'Age Weeks' },
  			{ field: 'unitsOnOrder', header: 'Units On Order' },
  			{ field: 'department', header: 'Department' },
  			{ field: 'subcategory', header: 'Subcategory' }
  		];

  		this.listColumns = this.warehouseItemHeader;
  		this.selectedColumns = this.warehouseItemHeader;
  	}

  	toggleColums(){

  	}

  	adjustDensity(direction){
  		if(direction === 'plus') this.density += 10;
  			else this.density -= 10;
  	}

  	unselectItems(){
  		this.selectedItems = [];
  	}

}
