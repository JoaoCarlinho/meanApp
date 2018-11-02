import { Component } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ISE Optimizations';

  gamePlay: boolean = false;
  bizInfo: boolean = true;

  constructor(private game: GameService) { }

  ngOnInit() {
    this.game.gameStatus.subscribe(game => this.gamePlay = game)
    this.game.gameStatus.subscribe(game => this.bizInfo = !game)
  }
}
