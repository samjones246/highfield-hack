import { Component, Input, OnInit } from '@angular/core';
import { BasePuzzleComponent } from '../base-puzzle/base-puzzle.component';

@Component({
  selector: 'app-puzzle-crossword',
  templateUrl: './puzzle-crossword.component.html',
  styleUrls: ['./puzzle-crossword.component.scss']
})
export class PuzzleCrosswordComponent extends BasePuzzleComponent {

  @Input() data : any;
  grid : boolean[]

  ngOnInit(): void {
    this.grid = []
    for(var i=0;i<this.data.anagrams.length;i++){
      for(var j=0;j<this.data.offsets[i];j++){
        this.grid.push(false)
      }
      for(var j=0;j<this.data.anagrams[i].length;j++){
        this.grid.push(true)
      }
      for(var j=0;j<this.data.numColumns-this.data.anagrams[i].length-this.data.offsets[i];j++){
        this.grid.push(false)
      }
    }
  }

}
