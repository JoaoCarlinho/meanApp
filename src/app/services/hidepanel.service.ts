import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HidepanelService {
  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  ShowHidePanel(visibility:boolean){
      this.messageSource.next(visibility);
  }
}
