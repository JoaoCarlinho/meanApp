import { Component, OnInit } from '@angular/core';
import { HidepanelService } from '../services/hidepanel.service';
import { ServicelistService } from '../services/servicelist.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  visibility: boolean; //visibility of sidebar
  serviceLine: string; //selected service line from sidbar

  constructor(private data: HidepanelService, private info: ServicelistService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(visibility => this.visibility = visibility)
    this.info.currentLine.subscribe(line => this.serviceLine = line)
  }

  ShowServiceLine(line: string){
    this.serviceLine = line;
    this.info.ShowServiceLine(this.serviceLine);
    //console.log (this.serviceLine+'showing');
  }

}
