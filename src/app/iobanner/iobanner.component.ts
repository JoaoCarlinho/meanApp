import { Component, OnInit } from '@angular/core';
import { HidepanelService } from '../services/hidepanel.service';
import { ServicedetailService } from '../services/servicedetail.service';
import { NewsletterService } from '../services/newsletter.service';
import { ConsultService } from '../services/consult.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-iobanner',
  templateUrl: './iobanner.component.html',
  styleUrls: ['./iobanner.component.scss']
})
export class IobannerComponent implements OnInit {
  visibility: boolean;//visibility of Sidebar
  formVisibility: boolean ;
  subscribeVisibility: boolean;
  adminVisibility: boolean;

  constructor(private data: HidepanelService, private detail: ServicedetailService, private consult: ConsultService, private news: NewsletterService, private admin: AdminService) { }

  ngOnInit() {
    //set current visibility of sidebar
    this.data.currentMessage.subscribe(visibility => this.visibility = visibility)
    //set current visibility of request Form
    this.consult.formVisibility.subscribe(formVisibility => this.formVisibility = formVisibility)
    //set current visibility of request Form
    this.news.subscribeVisibility.subscribe(subscribeVisibility => this.subscribeVisibility = subscribeVisibility)
    //set current visibility of request Form
    this.admin.adminVisible.subscribe(adminVisible => this.adminVisibility = adminVisible)
  }

  UpdateVisibility(){
    this.visibility = this.visibility == true ? false : true;
    this.data.ShowHidePanel(this.visibility);
    this.formVisibility = false;
    this.subscribeVisibility = false;
    this.adminVisibility = false;
    this.admin.ShowAdminPanel(this.adminVisibility);
    this.consult.ShowRequestForm(this.formVisibility);
    this.news.ShowSubscribeForm(this.subscribeVisibility);
    //console.log ('visiblity:'+this.visibility);
  }

}
