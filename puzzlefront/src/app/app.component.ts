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
  puzzles : Boolean[];

  constructor (private playerService : PlayerService){
    playerService.puzzles.subscribe(updated => {
      console.log(updated);
      this.puzzles = updated;
    })
  }

  reset() : void {
    this.playerService.reset();
  }
}
