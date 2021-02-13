import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { BasePuzzleComponent } from '../base-puzzle/base-puzzle.component';
import { PlayerService } from '../player.service';
import { PuzzleDirective } from '../puzzle-directive';
import { PuzzleMapService } from '../puzzle-map.service';

@Component({
  selector: 'app-puzzle-viewer',
  templateUrl: './puzzle-viewer.component.html',
  styleUrls: ['./puzzle-viewer.component.scss']
})
export class PuzzleViewerComponent implements OnInit {
  faLongArrowAltLeft = faLongArrowAltLeft;
  @Input() puzzle : number;
  @Output() return = new EventEmitter<void>();
  @ViewChild(PuzzleDirective, {static: true}) puzzleHost: PuzzleDirective;

  constructor(private playerService : PlayerService, 
    private puzzleMapService : PuzzleMapService,
    private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
    const puzzleData = this.puzzleMapService.getPuzzle(this.puzzle);
    if (!puzzleData){
      return;
    }
    const component = puzzleData.component;
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.puzzleHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<BasePuzzleComponent>(factory);
    componentRef.instance.data = puzzleData.data;
    componentRef.instance.complete.subscribe(() => {
      this.puzzleComplete();
    })
  }

  returnClicked() : void {
    this.return.emit();
  }

  puzzleComplete() : void {
    this.playerService.completePuzzle(this.puzzle);
  }

}
