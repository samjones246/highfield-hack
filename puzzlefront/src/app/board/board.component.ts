import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() puzzles : Boolean[];
  cards : number[] = [];
  current : number = null;
  @Output() cardChosen = new EventEmitter<number>();
  constructor(private playerService : PlayerService) {
    this.cards = new Array(25);
    for(var i=0;i<25;i++){
      this.cards[i] = i+1;
    }
    playerService.puzzles.subscribe(puzzles => {
      var cards = []
      for(var i=0;i<puzzles.length;i++){
        if (puzzles[i]){
          cards.push(i+1);
        }else{
          cards.push(null);
        }
      }
      this.cards = cards;
    })
  }

  ngOnInit(): void {
  }

  cardClicked(id) : void {
    this.cardChosen.emit(id);
    this.current = id;
  }

}
