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
  pieces = ["A1.svg", "A2.svg", "A3.svg","A4.svg", "A5.svg", "A6.svg","A7.svg", "A8.svg", "A9.svg",
            "B1.svg", "B2.svg", "B3.svg","B4.svg", "B5.svg", "B6.svg","B7.svg", "B8.svg", "B9.svg",
            "C1.svg", "C2.svg", "C3.svg","C4.svg", "C5.svg", "C6.svg","C7.svg", "C8.svg", "C9.svg"]
  positions = []
  ngOnInit(){
    this.positions = Array(this.pieces.length);
    for(var i=0;i<this.pieces.length;i++){
      this.positions[i] = [this.getRandomLeft(), this.getRandomTop()];
    }
    console.log(this.positions)
  }
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
  getRandomTop() : string {
    var lowerBound = 26;
    var upperBound = 65;
    var val = "" + (Math.trunc(Math.random() * (upperBound - lowerBound)) + lowerBound) + "vh"
    return val;
  }

  getRandomLeft() : string {
    var upperBound = 80;
    var lowerBound = 20;
    var val = "" + (Math.trunc(Math.random() * (upperBound - lowerBound)) + lowerBound) + "vw"
    return val;
  }
}
