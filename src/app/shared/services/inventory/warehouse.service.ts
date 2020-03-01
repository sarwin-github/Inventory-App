import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { WarehouseAllocationTotal } from '../../domain/wa-total';
import { WarehouseAllocationItems } from '../../domain/wa-items';

@Injectable({
	providedIn: 'root'
})
export class WarehouseService {

	constructor(private http: HttpClient) { }

	// get warehouse allocation total
	getWarehouseAllocationTotal(): Observable<any> {
	return this.http.get<any>('assets/fake-db/inventory-warehouse-allocation-total.json')
		.pipe(
			map(res => <WarehouseAllocationTotal[]>res.data),
			catchError(this.handleError)
		);
	}

	// get warehouse allocation items
	getWarehouseAllocationItems(): Observable<any> {
	return this.http.get<any>('assets/fake-db/inventory-warehouse-allocation-items.json')
		.pipe(
			map(res => <WarehouseAllocationItems[]>res.data),
			catchError(this.handleError)
		);
	}

	// error handler
	private handleError(error: any, caught: any): any {
	  throw error;
	}
}
