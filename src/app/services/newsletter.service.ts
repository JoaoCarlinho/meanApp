import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private newsForm = new BehaviorSubject<boolean>(false);
  subscribeVisibility = this.newsForm.asObservable();
  /*private success = new BehaviorSubject<boolean>(false);
  subscriptionState = this.success.asObservable();
  */

  constructor(private _http: Http) { }

  ShowSubscribeForm(subscribeVisibility: boolean){
    this.newsForm.next(subscribeVisibility);
    console.log('subscribe visibilty is '+subscribeVisibility)
  }

  public CompleteSubscription(subscriberInfo) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post("/subscribers/", subscriberInfo, {headers: headers})
    .pipe(map(res => this.newsForm = res.json().data)).toPromise();
  }
}