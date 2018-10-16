import { Component, OnInit } from '@angular/core';
import { ServicedetailService } from '../services/servicedetail.service';
import { ConsultService } from '../services/consult.service';

@Component({
  selector: 'app-ioservices',
  templateUrl: './ioservices.component.html',
  styleUrls: ['./ioservices.component.scss']
})
export class IoservicesComponent implements OnInit {
  detailVisibility: boolean;//visibility of service detail
  serviceShowing: IOService; //selected IOService
  requestingConsult: boolean = false;

  constructor( private detail: ServicedetailService, private consult: ConsultService) { }

  ngOnInit() {
    //set current service for detail
    this.detail.currentService.subscribe(ioservice => this.serviceShowing = ioservice)
    //set current visibility of service detail
    this.detail.detailVisibility.subscribe(detailVisibility => this.detailVisibility = detailVisibility)
    //set current visibility of request Form
    this.consult.formVisibility.subscribe(formVisibility => this.requestingConsult = formVisibility)
  }
  requestConsult(){
    this.requestingConsult = !this.requestingConsult;
    this.consult.ShowRequestForm(this.requestingConsult);
  }

}

export class IOService {
  id: number;
  name: string;
  price: string;
  schedule: object;
  description: string;
  maintenance: string;
  serviceType: string;
}
