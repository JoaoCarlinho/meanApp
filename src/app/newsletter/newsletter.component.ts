import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  subscribeVisibility: boolean = false;
  confirmVisibility: boolean = false;
  subscriberInfo = new subScriber;
  subscriptionState: boolean = false;


  constructor(private news: NewsletterService) { }

  ngOnInit() {
    //set current state of subscription submission
    this.news.subscribeVisibility.subscribe(subscribeVisibility => this.subscribeVisibility = subscribeVisibility)
    //set current state of subscription submission
    //this.news.subscriptionState.subscribe(subscriptionState => this.subscriptionState = subscriptionState)
    //this.subscriberInfo = {"firstName":"", "lastName": "", "email": "", "phone": "", "serviceType": "", "company": "", "industry": "", "region": "", "department": "", "position": "", "clientAccounts": 0, "employees": 0, "requestDate": Date.now(), "consultDate": Date.now(), "closedStatus": 0};
    this.subscriberInfo = {"firstName":"Johnathan", "lastName": "Skeete", "email": "JSkeete@gmail.com", "phone": "9016203000", "company": "IO", "industry": "IT Services", "department": "Sales", "position": "Lead", "subscribeDate": Date.now(), };
  }

  subscribe(){
    this.subscribeVisibility = !this.subscribeVisibility;
    this.news.ShowSubscribeForm(this.subscribeVisibility);
  }

  confirmSubscription(){
    this.confirmVisibility = !this.confirmVisibility;
    //console.log('confirm visibility is '+this.confirmVisibility);
    //console.log(this.subscriberInfo);
  }

  submitSubscription(){
    this.news.CompleteSubscription(this.subscriberInfo);
    this.confirmVisibility = !this.confirmVisibility;
    this.subscribeVisibility = false;
    this.news.ShowSubscribeForm(this.subscribeVisibility);
  }

}

export class subScriber{
  firstName: String; 
  lastName: String; 
  email: String; 
  phone: String; 
  company: String; 
  industry: String; 
  department: String; 
  position: String; 
  subscribeDate: Number;
}
