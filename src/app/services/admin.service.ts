import { Injectable } from '@angular/core';
import { IOService } from '../ioservices/ioservices.component';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private visibility = new BehaviorSubject<boolean>(false);
  adminVisible = this.visibility.asObservable();
  loginSuccess = new BehaviorSubject<boolean>(false);
  loginState = this.loginSuccess.asObservable();
  confirmService: boolean = false;
  updateSuccess: boolean = false;
  serviceInfo = IOService;
  constructor(private _http: Http) { }

  Login(formValues) {
    console.log(formValues.userName+' : '+formValues.password);  // { first: '', last: '' }
    //console.log(formValues.valid);  // false
    //let headers = new Headers();
    //headers.append('Content-Type','application/json');
    //return this._http.post("/admin/", formValues, {headers: headers})
    return this._http.post("/admin/", formValues)
    .pipe(map(res => this.loginSuccess = res.json())).toPromise();
  }

  ShowAdminPanel(visibility){
    this.visibility.next(visibility)
  }

  public UpdateServices(serviceInfo){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //return this._http.post("/ioservices/", serviceInfo, {headers: headers})
    return this._http.post("/ioservices/", serviceInfo)
    .pipe(map(res => this.updateSuccess = res.json().data)).toPromise();
  }
}
