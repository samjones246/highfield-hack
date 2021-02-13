import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-puzzle-viewer',
  templateUrl: './puzzle-viewer.component.html',
  styleUrls: ['./puzzle-viewer.component.scss']
})
export class PuzzleViewerComponent implements OnInit {
  faLongArrowAltLeft = faLongArrowAltLeft;
  @Input() puzzle : number;
  @Output() return = new EventEmitter<void>();
  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {
  }

  returnClicked() : void {
    this.puzzleComplete();
    this.return.emit();
  }

  puzzleComplete() : void {
    this.playerService.completePuzzle(this.puzzle);
  }

}
