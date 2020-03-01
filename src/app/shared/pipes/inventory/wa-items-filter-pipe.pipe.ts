import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waItemsFilterPipe'
})
export class WaItemsFilterPipePipe implements PipeTransform {

  	transform(list: any, args?: any): any {
      if(!list) return null;
      if(!args) return list;

      args = args.toLowerCase();

      return list.filter((item) => JSON.stringify(item).toLowerCase().includes(args));
  	}

}
