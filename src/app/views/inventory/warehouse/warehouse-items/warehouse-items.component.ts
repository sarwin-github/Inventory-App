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

  	public filterBy: any[];
  	public selectedFilter: any[];

  	ngOnInit(): void {
  		this.warehouseItemHeader = [
  			{ field: 'unreleasedAllocation', header: 'Unreleased Allocation', class: 'info-main' },
  			{ field: 'scheduledRelease', header: 'Scheduled Release', class: 'info-main' },
  			{ field: 'styleCode', header: 'Style Code', class: 'info-main' },
  			{ field: 'styleName', header: 'Style Name', class: 'info-main' },
  			{ field: 'priceStatus', header: 'Price Status', class: 'info-sub' },
  			{ field: 'availableWHUnits', header: 'Available WH Units', class: 'info-sub' },
  			{ field: 'allocatedUnits', header: 'Allocated Units', class: 'info-sub' },
  			{ field: 'instoreWksCover', header: 'Instore Wks Cover', class: 'info-sub' },
  			{ field: 'styleWksCover', header: 'Style Wks Cover', class: 'info-sub' },
  			{ field: 'thisWeekUnitSold', header: 'This Week Unit Sold', class: 'info-main' },
  			{ field: 'lastWeekUnitsSold', header: 'Last Week Units Sold', class: 'info-main' },
  			{ field: 'ageWeeks', header: 'Age Weeks', class: 'info-main' },
  			{ field: 'unitsOnOrder', header: 'Units On Order', class: 'info-main' },
  			{ field: 'department', header: 'Department', class: 'info-sub' },
  			{ field: 'subcategory', header: 'Subcategory', class: 'info-sub' }
  		];

  		this.filterBy = [
  			{ filter: 'Womens' },
  			{ filter: 'Mens' },
  			{ filter: 'REG' },
  			{ filter: 'MD1' }
  		]

  		this.selectedFilter = [];
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
