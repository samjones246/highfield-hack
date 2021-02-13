import { Injectable, Type } from '@angular/core';
import { PuzzleData } from './puzzle-data';
import { PuzzleSequenceAComponent } from './puzzle-sequence-a/puzzle-sequence-a.component';
import { PuzzleSequenceBComponent } from './puzzle-sequence-b/puzzle-sequence-b.component';

@Injectable({
  providedIn: 'root'
})
export class PuzzleMapService {
  mapping = {1: new PuzzleData(PuzzleSequenceAComponent, {correctAnswer: "7"}),
             16: new PuzzleData(PuzzleSequenceBComponent, {correctAnswer: "S"})}
  constructor() { }
  getPuzzle(id) : PuzzleData{
    return this.mapping[id];
  }
}
