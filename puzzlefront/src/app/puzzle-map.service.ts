import { Injectable, Type } from '@angular/core';
import { PuzzleCrosswordComponent } from './puzzle-crossword/puzzle-crossword.component';
import { PuzzleData } from './puzzle-data';
import { PuzzleSequenceAComponent } from './puzzle-sequence-a/puzzle-sequence-a.component';
import { PuzzleSequenceBComponent } from './puzzle-sequence-b/puzzle-sequence-b.component';

@Injectable({
  providedIn: 'root'
})
export class PuzzleMapService {
  mapping = {1: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "7", sequence:"1 3 2 4 3 5 4 6 5 7 6 8"}),
             16: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "S", sequence:"A D G J M P"}),
             2: new PuzzleData(PuzzleCrosswordComponent, {correctAnswer: "cheese",
                                                          numColumns:18, 
                                                          anagrams:["mrabmetce","redachd","agnorlozgo","ebir","pansearm","nitlots","lazelmzora","leendayslwe","rhchseei"],
                                                          offsets:[8, 7, 6, 6, 3, 4, 8, 0, 5],
                                                          targetColumn:8
                                                        })}
  constructor() { }
  getPuzzle(id) : PuzzleData{
    return this.mapping[id];
  }
}
