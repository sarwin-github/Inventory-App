import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WarehouseService } from '../../../shared/services/inventory/warehouse.service';
import { WarehouseAllocationTotal } from '../../../shared/domain/wa-total';
import { WarehouseAllocationItems } from '../../../shared/domain/wa-items';

@Component({
	selector: 'app-warehouse',
	templateUrl: './warehouse.component.html',
	styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit, OnDestroy {
	private waTotalReq: Subscription;
	private waItemsReq: Subscription;

	public warehouseTotal: {}[]= [];
	public warehouseItems: {}[]= [];

	public globalSearch: string;

	constructor(private warehouseService: WarehouseService,
		) { }

	ngOnInit(): void {
		this.getWarehouseAllocationTotal();
		this.getWarehouseAllocationItems();
	}

	ngOnDestroy(): void{
		if(this.waTotalReq) this.waTotalReq.unsubscribe();
	}

	getWarehouseAllocationTotal(){
		this.waTotalReq = this.warehouseService
		.getWarehouseAllocationTotal()
		.subscribe(res => {
			this.warehouseTotal = [...res, this.getWarehouseAllocationTotalData(res)];
			
			//console.log(this.warehouseTotal);
		});
	}

	getWarehouseAllocationTotalData(totalWarehouse){
		const computeTotal = (a,b) => 
			Object.assign({}, a, b, {
				"inventory": "Total",
				"retailWarehouse":{
					"costOnHand": ( a.retailWarehouse.costOnHand || 0 ) + b.retailWarehouse.costOnHand,
					"retailOnHand": ( a.retailWarehouse.retailOnHand || 0 ) + b.retailWarehouse.retailOnHand
				},
				"retailStores":{
					"costOnHand": ( a.retailStores.costOnHand || 0 ) + b.retailStores.costOnHand,
					"retailOnHand": ( a.retailStores.retailOnHand || 0 ) + b.retailStores.retailOnHand,
					"weeksCover": ( a.retailStores.weeksCover || 0 ) + b.retailStores.weeksCover
				},
				"retailTotal":{
					"costOnHand": ( a.retailTotal.costOnHand || 0 ) + b.retailTotal.costOnHand,
					"retailOnHand": ( a.retailTotal.retailOnHand || 0 ) + b.retailTotal.retailOnHand,
					"weeksCover": ( a.retailTotal.weeksCover || 0 ) + b.retailTotal.weeksCover
				}
			})

		let output = [...totalWarehouse].reduce(computeTotal);

		return output;
	}

	getWarehouseAllocationItems(){
		this.waItemsReq = this.warehouseService
		.getWarehouseAllocationItems()
		.subscribe(res => {
			this.warehouseItems = res;
			//console.log(this.warehouseItems);
		});
	}
}
