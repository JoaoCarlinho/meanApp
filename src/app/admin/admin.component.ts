import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ServicelistService } from '../services/servicelist.service';
import { IOService } from '../ioservices/ioservices.component';
import { HidepanelService } from '../services/hidepanel.service';
import {NgForm} from '@angular/forms';

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
  confirmCreate: boolean;
  serviceInfo: IOService;
  editingService:boolean = false;
  creatingService:boolean = false;
  updateType: string;
  userName: string;
  password: string;
  serviceList: IOService[];
  


  constructor(private admin: AdminService, private info: ServicelistService, private data: HidepanelService) { }
  
  ngOnInit() {
    //subscribe for login form visibility
    this.admin.loginState.subscribe(state => {
      this.loginFormVisibility = !state;
      this.loginSuccess = state;
    })
    //set current service for detail
    this.admin.adminVisible.subscribe(adminVisible => this.adminVisibility = adminVisible)
    //subscribe to current service list
    this.info.loadServiceLines().subscribe(res => this.serviceList = res);
  }

  Submit(){
    //console.log(this.userName);  // { first: '', last: '' }
    //console.log(this.password);  // false 
    this.admin.Login({"userName":this.userName, "password": this.password});
    console.log(this.serviceList);
  }

  ShowAdminPanel(){
    this.loginSuccess = false;
    this.adminVisibility = !this.adminVisibility
    this.admin.ShowAdminPanel(this.adminVisibility)
  }

  EditService(IOService = null){
    this.editingService = !this.editingService;
    scroll(0, 0);
    if(IOService == null){
      this.updateType = 'new';
    }else{
        this.updateType = 'current'
        this.serviceInfo = IOService;
    }
  }

  ConfirmUpdate(){
    this.editingService = !this.editingService;
    this.confirmService = !this.confirmService;
  }

  ConfirmCreate(form){
    this.creatingService = !this.creatingService;
    this.confirmCreate = !this.confirmCreate;
    this.serviceInfo = {
      name: form.serviceName,
      price:form.servicePrice,
      schedule:{"minimum delivery":form.serviceDelivery, "Design":form.serviceDesign, "Development":form.serviceDevelopment, "Implementation/Confirmation":form.serviceTest, "Review":form.serviceReview},
      description:form.serviceDescription,
      maintenance:form.serviceMaintain,
      serviceType:form.serviceType, 
    }

    console.log(this.serviceInfo);
  }

  UpdateServices(serviceStatus){
    this.confirmService = !this.confirmService;
    this.admin.UpdateServices(this.serviceInfo);
    this.updateType = '';
  }

  getServices(){
    this.info.loadServiceLines()
    .subscribe(
      services =>{
        this.serviceList = services;
      }
    )
  }

  CreateService(){
    this.creatingService = !this.creatingService;
    this.admin.CreateService(this.serviceInfo)
    .subscribe(
      result =>{
        console.log(result);
        this.getServices();
      }
    )
    this.updateType = '';
  }
  //function to hide admin panel
  UpdateVisibility(){
    this.data.ShowHidePanel(false);
    //console.log ('visiblity:'+this.visibility);
  }
}