import { Injectable, Type } from '@angular/core';
import { GenericPuzzleComponent } from './generic-puzzle/generic-puzzle.component';
import { PaintingPuzzleComponent } from './painting-puzzle/painting-puzzle.component';
import { PuzzleCrosswordComponent } from './puzzle-crossword/puzzle-crossword.component';
import { PuzzleData } from './puzzle-data';
import { PuzzleSequenceAComponent } from './puzzle-sequence-a/puzzle-sequence-a.component';

@Injectable({
  providedIn: 'root'
})
export class PuzzleMapService {
  mapping = {1: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "7", sequence:"1 3 2 4 3 5 4 6 5 7 6 8"}),
             18: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "63", sequence:"0 3 8 15 24 35 48"}),
             5: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "21", sequence:"1 1 2 3 5 8 13"}),
             8: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "pentagon", sequence:"circle, semi-circle, triangle, square"}),
             12: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "8192", sequence:"2 2 4 8 32 256"}),
             22: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "S", sequence:"F T N I I T"}),
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
             14: new PuzzleData(GenericPuzzleComponent, {correctAnswer: "22",
                                                        description:[],
                                                        content:["Jane is moving house. She has 385 books and can fit 18 books in a box.","How many boxes will she need?"]}),
             6: new PuzzleData(PaintingPuzzleComponent, {correctAnswer: "done"})
            }
  constructor() { }
  getPuzzle(id) : PuzzleData{
    return this.mapping[id];
  }
}
