import { Component, OnInit } from '@angular/core';
import { ServicedetailService } from '../services/servicedetail.service';
import { ConsultService } from '../services/consult.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  serviceType: String;
  submissionState: String;
  formVisibility: boolean;
  confirmVisibility: boolean = false;
  consultInfo = new Consultation;

  constructor(private detail: ServicedetailService, private message: ConsultService) { }

  ngOnInit() {
    //set current state of consult submission
    //this.message.submissionState.subscribe(message => this.submissionState = message)
    //set current service for detail
    this.detail.currentService.subscribe(ioservice => this.serviceType = ioservice.serviceType)
    //set current visibility of request Form
    this.message.formVisibility.subscribe(formVisibility => this.formVisibility = formVisibility)
    //this.consultInfo = {"firstName":"", "lastName": "", "email": "", "phone": "", "serviceType": "", "company": "", "industry": "", "region": "", "department": "", "position": "", "clientAccounts": 0, "employees": 0, "requestDate": Date.now(), "consultDate": Date.now(), "closedStatus": 0};
    this.consultInfo = {"firstName":"Johnathan", "lastName": "Skeete", "email": "JSkeete@gmail.com", "phone": "9016203000", "serviceType": "Consulting Services", "company": "IO", "industry": "IT Services", "region": "EST", "department": "Sales", "position": "Lead", "clientAccounts": 15, "employees": 30, "requestDate": Date.now(), "consultDate": Date.now(), "closedStatus": 0};
  }

  requestConsult(){
    this.formVisibility = !this.formVisibility;
    this.message.ShowRequestForm(this.formVisibility);
  }

  confirmRequest(){
    this.confirmVisibility = !this.confirmVisibility;
    //console.log('confirm visibility is '+this.confirmVisibility);
    console.log(this.consultInfo);
  }

 /*
   onSubmit(f: NgForm) {
    this.confirmRequest();
    console.log('confirm visibility is '+this.confirmVisibility);
    console.log(this.consultInfo);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
 */

  submitRequest(){
    this.message.CompleteSubmission(this.consultInfo);
    this.confirmVisibility = !this.confirmVisibility;
    this.formVisibility = false;
    this.message.ShowRequestForm(this.formVisibility);
  }
}

export class Consultation{
  firstName: String; 
  lastName: String; 
  email: String; 
  phone: String;
  serviceType: String; 
  company: String; 
  industry: String;
  region: String; 
  department: String; 
  position: String;
  clientAccounts: Number;
  employees:  Number;
  requestDate: Number;
  consultDate: Number;
  closedStatus: Number;
}
