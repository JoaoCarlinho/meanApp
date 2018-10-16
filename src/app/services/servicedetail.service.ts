import { Injectable } from '@angular/core';
import { IOService } from '../ioservices/ioservices.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicedetailService {
  private detailSource = new BehaviorSubject<boolean>(false);
  private messageSource = new BehaviorSubject<IOService>({"id":0, "name":"blank", "price":"0", "schedule":{"empty":"none"}, "description": "blank", "maintenance": "blank", "serviceType": 'blank'});
  currentService = this.messageSource.asObservable();
  detailVisibility = this.detailSource.asObservable();

  constructor() { }

  ShowService(ioservice: IOService){
    this.messageSource.next(ioservice);
  }

  ShowDetail(detailVisibility: boolean){
    this.detailSource.next(detailVisibility);
  }
  
}
