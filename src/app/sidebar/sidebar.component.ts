import { Component, OnInit } from '@angular/core';
import { HidepanelService } from '../services/hidepanel.service';
import { ServicelistService } from '../services/servicelist.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  visibility: boolean; //visibility of sidebar
  serviceLine: string; //selected service line from sidbar
  adminVisibility: boolean;

  constructor(private data: HidepanelService, private info: ServicelistService, private admin: AdminService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(visibility => this.visibility = visibility)
    this.info.currentLine.subscribe(line => this.serviceLine = line)
    this.admin.adminVisible.subscribe(line => this.adminVisibility = line)
  }

  ShowServiceLine(line: string){
    this.serviceLine = line;
    this.info.ShowServiceLine(this.serviceLine);
    //console.log (this.serviceLine+'showing');
  }

  ShowAdminPanel(){
    this.adminVisibility = !this.adminVisibility;
    this.admin.ShowAdminPanel(this.adminVisibility)
  }

}
