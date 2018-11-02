import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameSource = new BehaviorSubject<boolean>(false);
  gameStatus = this.gameSource.asObservable();

  constructor() { }

  PlayGame(gameBool:boolean){
    this.gameSource.next(gameBool);
    console.log('gameState ='+gameBool);
}
}
