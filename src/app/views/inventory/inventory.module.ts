import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './inventory.routing';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { WarehouseTotalComponent } from './warehouse/warehouse-total/warehouse-total.component';
import { WarehouseItemsComponent } from './warehouse/warehouse-items/warehouse-items.component';
const primengModules = [
	TableModule,
  TooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
  	WarehouseComponent,
  	WarehouseTotalComponent,
  	WarehouseItemsComponent
  ]
})
export class InventoryModule { }
