import { Component, OnInit } from '@angular/core';
import { BasePuzzleComponent } from '../base-puzzle/base-puzzle.component';

@Component({
  selector: 'app-painting-puzzle',
  templateUrl: './painting-puzzle.component.html',
  styleUrls: ['./painting-puzzle.component.scss']
})
export class PaintingPuzzleComponent extends BasePuzzleComponent {

  ngOnInit(): void {
  }

}
