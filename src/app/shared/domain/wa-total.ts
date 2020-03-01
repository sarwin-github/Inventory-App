export interface WarehouseAllocationTotal{
	inventory?: string;
	retailWarehouse:{
		costOnHand?: number;
		retailOnHand?: number;
	};
	retailStores:{
		costOnHand?: number;
		retailOnHand?: number;
		weeksCover?: number;
	};
	retailTotal:{
		costOnHand?: number;
		retailOnHand?: number;
		weeksCover?: number;
	}
}