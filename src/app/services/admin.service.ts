import { Injectable } from '@angular/core';
import { IOService } from '../ioservices/ioservices.component';
import { Http, Headers } from '@angular/http';
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
    this._http.post("/admin/", formValues)
    .pipe(map(res => this.loginSuccess.next(res.json()))).toPromise()
  }

  ShowAdminPanel(visibility){
    this.visibility.next(visibility);
    console.log('showing admin');
  }

  public UpdateServices(serviceInfo){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put("/ioservices/+serviceInfo"+serviceInfo._id, serviceInfo, {headers: headers})
    .pipe(map(res => res.json()));
  /* 
    return this._http.put("/ioservices/"+serviceInfo._id, serviceInfo)
    .pipe(map(res => this.updateSuccess = res.json().data)).toPromise();
    */
  }

  public CreateService(formValues){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post("/ioservices/", formValues, {headers: headers})
    .pipe(map(res => res.json()));
    /*
    return this._http.post("/ioservices/", formValues)
    .pipe(map(res => this.updateSuccess = res.json().data)).toPromise();
    */
  }

  deleteService(id){
    return this._http.delete("/ioservices/"+id)
    .pipe(map(res => res.json()));
  }


}
