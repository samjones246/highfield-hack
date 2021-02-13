import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  cards : number[] = [];
  current : number = null;
  @Output() cardChosen = new EventEmitter<number>();
  constructor(private playerService : PlayerService) {
    this.cards = new Array(25);
    for(var i=0;i<25;i++){
      this.cards[i] = i+1;
    }
    playerService.puzzles.subscribe(puzzles => {
      this.cards = []
      for(var i=0;i<puzzles.length;i++){
        if (puzzles[i]){
          this.cards.push(i+1);
        }else{
          this.cards.push(null);
        }
      }
    })
  }

  ngOnInit(): void {
  }

  cardClicked(id) : void {
    this.cardChosen.emit(id);
    this.current = id;
  }

}
