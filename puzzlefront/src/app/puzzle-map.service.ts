import { Injectable, Type } from '@angular/core';
import { GenericPuzzleComponent } from './generic-puzzle/generic-puzzle.component';
import { PuzzleCrosswordComponent } from './puzzle-crossword/puzzle-crossword.component';
import { PuzzleData } from './puzzle-data';
import { PuzzleSequenceAComponent } from './puzzle-sequence-a/puzzle-sequence-a.component';

@Injectable({
  providedIn: 'root'
})
export class PuzzleMapService {
  mapping = {1: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "7", sequence:"1 3 2 4 3 5 4 6 5 7 6 8"}),
             16: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "S", sequence:"A D G J M P"}),
             2: new PuzzleData(PuzzleCrosswordComponent, {correctAnswer: "christmas",
                                                          numColumns:18, 
                                                          anagrams:["mrabmetce","redachd","agnorlozgo","ebir","pansearm","nitlots","lazelmzora","leendayslwe","rhchseei"],
                                                          offsets:[8, 7, 6, 6, 3, 4, 8, 0, 5],
                                                          targetColumn:8
                                                        }),
             3: new PuzzleData(GenericPuzzleComponent, {correctAnswer: "dog",
                                                        description:["Fill in the ? to spell out an animal.","? is the letter which ends the first word and begins the second, e.g. 'fal(?)ime' = L (fall, lime)"],
                                                        content: ["rea(?)ome  her(?)ops  sin(?)row"]
                                                      }),
             4: new PuzzleData(GenericPuzzleComponent, {correctAnswer: "252",
                                                        description:[],
                                                        content:["If 7 bengs make a bong, 12 bongs make a bing and a screwdriver costs 3 bings, how many bengs does a screwdriver cost?"]}),
             5: new PuzzleData(GenericPuzzleComponent, {correctAnswer: "22",
             description:[],
             content:["Jane is moving house. She has 385 books and can fit 18 books in a box.","How many boxes will she need?"]})
            }
  constructor() { }
  getPuzzle(id) : PuzzleData{
    return this.mapping[id];
  }
}
