import { Pipe, PipeTransform } from '@angular/core';
import { IOService } from './ioservices/ioservices.component';

@Pipe({
  name: 'myfilter'
})
export class ServiceLinePipe implements PipeTransform {

  transform(serviceList: IOService[], filter: string): any {
    if(!serviceList || !filter){
      return serviceList;
    }
    return serviceList.filter(item => item.serviceType.indexOf(filter) !== -1);
  }

}
