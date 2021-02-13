import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'puzzlefront';
  activeCard = null;

  constructor (private playerService : PlayerService){

  }

  reset() : void {
    this.playerService.reset();
  }
}
