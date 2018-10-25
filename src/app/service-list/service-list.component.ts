import { Component, OnInit } from '@angular/core';
import { ServicelistService } from '../services/servicelist.service';
import { ServicedetailService } from '../services/servicedetail.service';
import { HidepanelService } from '../services/hidepanel.service';
import { IOService } from '../ioservices/ioservices.component';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  visibility: boolean;//visibility of Sidebar
  detailVisibility: boolean;//visibility of service detail
  serviceLine: string; //selected service line from sidbar
  serviceShowing: IOService; //selected IOService
  
  list: IOService[];

  constructor(private info: ServicelistService, private detail: ServicedetailService, private data: HidepanelService) { }

  ngOnInit() {
    //set current service line
    this.info.currentLine.subscribe(line => this.serviceLine = line)
    //import service list from API
    //this.info.loadServiceLines()
    //subscribe to current service list
    this.info.loadServiceLines().subscribe(res => this.list = res);
    //set current service for detail
    this.detail.currentService.subscribe(ioservice => this.serviceShowing = ioservice)
    //set current visibility of service detail
    this.detail.detailVisibility.subscribe(detailVisibility => this.detailVisibility = detailVisibility)
  }

  ShowService(ioservice: IOService){
    this.serviceShowing = ioservice;
    this.detail.ShowService(this.serviceShowing);
    //console.log(this.serviceShowing);
    console.log(this.list)
  }

  UpdateVisibility(){
    this.data.ShowHidePanel(false);
  }

  ShowDetail(){
    this.detailVisibility = true;
    this.detail.ShowDetail(this.detailVisibility);
    //console.log('detail visible = '+this.detailVisibility);
  }

}
