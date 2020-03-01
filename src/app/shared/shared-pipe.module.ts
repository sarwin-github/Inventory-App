import { NgModule } from '@angular/core';
import { WaItemsFilterPipePipe } from '../shared/pipes/inventory/wa-items-filter-pipe.pipe'; 

const classesToInclude = [
  WaItemsFilterPipePipe
]

@NgModule({
  imports: [
  ],
  entryComponents: [],
  providers: [],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule { }
