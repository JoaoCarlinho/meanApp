import { Component, OnInit } from '@angular/core';
import { ServicedetailService } from '../services/servicedetail.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  detailVisibility: boolean;//visibility of service detail
  title = 'ISE Optimizations';
  constructor(private detail: ServicedetailService) { 
  }

  ngOnInit() {
    //set current visibility of service detail
    this.detail.detailVisibility.subscribe(detailVisibility => this.detailVisibility = detailVisibility)
  }

}
