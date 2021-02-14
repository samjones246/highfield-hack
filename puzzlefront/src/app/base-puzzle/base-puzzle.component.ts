import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Puzzle } from '../puzzle';

@Component({
  selector: 'app-base-puzzle',
  templateUrl: './base-puzzle.component.html',
  styleUrls: ['./base-puzzle.component.scss']
})
export class BasePuzzleComponent implements OnInit, Puzzle{
  @Input() data : any;
  @Output() complete = new EventEmitter<void>();
  feedback : number = 0;
  @Input() canPlay : boolean;

  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {
  }

  checkAnswer(answer : string) : void{
    console.log(answer)
    if (answer.toLowerCase() == this.data.correctAnswer.toLowerCase()){
      this.feedback = 1;
      this.complete.emit();
    }else{
      this.feedback = -1;
    }
  }

}
