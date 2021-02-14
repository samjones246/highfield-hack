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
  id : string;
  locks : any[];
  canView : boolean;
  canPlay : boolean;
  player : number = 0;

  constructor (private playerService : PlayerService){
    playerService.puzzles.subscribe(updated => {
      console.log(updated);
      this.puzzles = updated;
    })
    playerService.myId.subscribe(id => {
      this.id = id
    })
    playerService.locks.subscribe(locks => {
      console.log("Got locks")
      this.locks = locks;
      if(this.activeCard){
        this.canPlay = locks[this.activeCard - 1].playing.includes(this.id)
        this.canView = this.canPlay || !locks[this.activeCard - 1].limitViewers
        if(!this.canPlay && locks[this.activeCard - 1].playing.length < locks[this.activeCard - 1].playerLimit){
          this.playerService.tryLockPuzzle(this.activeCard);
        }
        //console.log(locks[this.activeCard-1].playing)
        this.player = locks[this.activeCard-1].playing.indexOf(this.id) + 1
        //console.log("(app component) player="+this.player)
      }
    })
  }

  showPuzzle(id) : void {
    this.playerService.tryLockPuzzle(id);
    this.activeCard = id;
  }

  reset() : void {
    this.playerService.reset();
  }
}
