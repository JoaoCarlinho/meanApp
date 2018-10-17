import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { IOService } from '../ioservices/ioservices.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminVisibility: boolean;
  loginFormVisibility: boolean;
  loginSuccess: boolean;
  confirmService: boolean;
  serviceInfo: IOService;
  editingService:boolean = false;
  creatingService:boolean = false;
  userName: string;
  password: string;
  


  constructor(private admin: AdminService) { }
  
  ngOnInit() {
    //set current service for detail
    this.admin.loginState.subscribe(state => this.loginFormVisibility = !state)
    //set current service for detail
    this.admin.adminVisible.subscribe(adminVisible => this.adminVisibility = adminVisible)
  }

  Submit(){
    console.log(this.userName);  // { first: '', last: '' }
    console.log(this.password);  // false 
    this.admin.Login({"userName":this.userName, "password": this.password});
  }

  ShowAdminPanel(){
    this.loginSuccess = false;
    this.adminVisibility = !this.adminVisibility
    this.admin.ShowAdminPanel(this.adminVisibility)
  }

  CreateService(){
    this.editingService = !this.editingService
  }

  EditService(IOService = null){
    this.editingService = !this.editingService
    if(IOService != null){
      this.serviceInfo = IOService;
    }
  }

  UpdateServices(){
    this.editingService = !this.editingService;
    this.confirmService = !this.confirmService;
    this.admin.UpdateServices(this.serviceInfo)
  }
}