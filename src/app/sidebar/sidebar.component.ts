import { Component, OnInit } from '@angular/core';
import { HidepanelService } from '../services/hidepanel.service';
import { ServicelistService } from '../services/servicelist.service';
import { AdminService } from '../services/admin.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  visibility: boolean; //visibility of sidebar
  serviceLine: string; //selected service line from sidbar
  adminVisibility: boolean;
  gameState: boolean;

  constructor(private data: HidepanelService, private info: ServicelistService, private admin: AdminService, private game: GameService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(visibility => this.visibility = visibility)
    this.info.currentLine.subscribe(line => this.serviceLine = line)
    this.admin.adminVisible.subscribe(line => this.adminVisibility = line)
    this.game.gameStatus.subscribe(game => this.gameState = game)
  }

  ShowServiceLine(line: string){
    this.serviceLine = line;
    this.info.ShowServiceLine(this.serviceLine);
    this.gameState = false;
    this.game.PlayGame(this.gameState);
    //console.log (this.serviceLine+'showing');
  }

  ShowAdminPanel(){
    this.adminVisibility = !this.adminVisibility;
    this.admin.ShowAdminPanel(this.adminVisibility)
  }

  PlayGame(){
    this.gameState = true;
    this.game.PlayGame(this.gameState);
  }

}
