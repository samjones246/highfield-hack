import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BasePuzzleComponent } from '../base-puzzle/base-puzzle.component';

@Component({
  selector: 'app-painting-puzzle',
  templateUrl: './painting-puzzle.component.html',
  styleUrls: ['./painting-puzzle.component.scss']
})
export class PaintingPuzzleComponent extends BasePuzzleComponent {
  canvas : boolean[][] = [[false, false, false],
                          [false, false, false],
                          [false, false, false],
                          [false, false, false],
                          [false, false, false],
                          [false, false, false]]
                          // A yellow
                          // B red
                          // C blue
  solution : boolean[][] = [[false, true, false],
                            [true, true, false],
                            [true, false, false],
                            [true, false, true],
                            [false, false, true],
                            [false, true, true]]
  filled : boolean[] = [false, false, false, false, false, false]
  brush : boolean[] = [false, false, false];
  assetDir = "../../assets/Painting-Jigsaw Puzzle/"
  pieces = ["A1.svg"]
  updateBrush(pot : number) : void {
    this.brush[pot] = true;
    console.log(this.brush)
  }
  clearBrush() : void {
    this.brush = [false, false, false]
  }
  paint(section : number) : void {
    this.canvas[section] = [...this.brush];
    this.filled[section] = this.brush.reduce((acc, next) => acc || next);
  }
  checkCanvas() : void{
    var done = true;
    for(var i=0;i<this.canvas.length;i++){
      for(var j=0;j<this.canvas[i].length;j++){
        if(this.canvas[i][j] != this.solution[i][j]){
          done = false;
          break;
        }
      }
    }
    console.log(this.canvas);
    if(done){
      this.checkAnswer("done")
    }else{
      this.checkAnswer("bad")
    }
  }
  getRandomTop() : number {
    return 0;
  }

  getRandomLeft() : number {
    return 0;
  }
}
