import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  private messageSource = new BehaviorSubject<any>('');
  private requestForm = new BehaviorSubject<boolean>(false);
  submissionState = this.messageSource.asObservable();
  formVisibility = this.requestForm.asObservable();


  constructor(private _http: Http) { }

  ShowRequestForm(formVisibility: boolean){
    this.requestForm.next(formVisibility);
    console.log('request form is'+this.requestForm);
  }

  public CompleteSubmission(consultInfo) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post("/consultations/", consultInfo, {headers: headers})
    .pipe(map(res => this.messageSource = res.json().data)).toPromise();
  }
}
