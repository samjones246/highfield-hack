import { Component, OnInit } from '@angular/core';
import { BasePuzzleComponent } from '../base-puzzle/base-puzzle.component';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-puzzle-sequence-a',
  templateUrl: './puzzle-sequence-a.component.html',
  styleUrls: ['./puzzle-sequence-a.component.scss']
})
export class PuzzleSequenceAComponent extends BasePuzzleComponent{

  ngOnInit(): void {
  }

}
