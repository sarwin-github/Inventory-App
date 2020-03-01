export interface WarehouseAllocationItems{
	unreleasedAllocation?: string;
	scheduledRelease?: Date;
	styleCode?: string;
	styleName?: string;
	priceStatus?: string;
	availableWHUnits?: number;
	allocatedUnits?: number;
	instoreWksCover?: number;
	styleWksCover?: number;
	thisWeekUnitSold?: number;
	lastWeekUnitsSold?: number;
	ageWeeks?: any;
	unitsOnOrder?: number;
	department?: string;
	subcategory?: string;
}