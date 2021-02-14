import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crossword-grid',
  templateUrl: './crossword-grid.component.html',
  styleUrls: ['./crossword-grid.component.scss']
})
export class CrosswordGridComponent implements OnInit {

  @Input() grid : boolean[]
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
