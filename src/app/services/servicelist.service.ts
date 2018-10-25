//import * as io from 'socket.io';
import { Injectable } from '@angular/core';
import { IOService } from '../ioservices/ioservices.component';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";
 
@Injectable({
  providedIn: 'root'
})

export class ServicelistService {
  private messageSource = new BehaviorSubject<string>('Your Business and Tech Advisors');
  currentLine = this.messageSource.asObservable();

  serviceList: IOService[];
  listSource = new BehaviorSubject<IOService[]>([]);
  currentList = this.listSource.asObservable();
  private socket;
  result:any;

  //private listSource = new BehaviorSubject<string>('serviceLine');
  //currentList = this.listSource.asObservable();

  constructor(private _http: Http) {
    
  }

 
 ShowServiceLine(line: string){
    this.messageSource.next(line);
  }
 

 
  loadServiceLines(){
    return this._http.get("/api/serviceList")
    .pipe(map(res => res.json()))
  }
  
}
