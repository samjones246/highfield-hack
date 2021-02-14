import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
export class PuzzleViewerComponent implements OnInit, OnChanges {
  faLongArrowAltLeft = faLongArrowAltLeft;
  @Input() puzzle : number;
  @Output() return = new EventEmitter<void>();
  @ViewChild(PuzzleDirective, {static: true}) puzzleHost: PuzzleDirective;
  @Input() canView : boolean;
  @Input() canPlay : boolean;
  @Input() player : number;
  componentRef : ComponentRef<BasePuzzleComponent> = null;
  loaded = false;

  constructor(private playerService : PlayerService, 
    private puzzleMapService : PuzzleMapService,
    private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
    if(this.canView){
      this.loadComponent()
    }
  }

  ngOnChanges(changes : SimpleChanges){
    if(!this.loaded && changes.canView.currentValue){
      this.loadComponent();
    }
    if(this.componentRef){
      this.componentRef.instance.canPlay = changes.canPlay.currentValue;
    }
  }

  loadComponent() : void {
    const puzzleData = this.puzzleMapService.getPuzzle(this.puzzle);
    if (!puzzleData){
      console.log("No puzzle data for " + this.puzzle)
      return;
    }
    const component = puzzleData.component;
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.puzzleHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent<BasePuzzleComponent>(factory);
    this.componentRef.instance.data = puzzleData.data;
    this.componentRef.instance.canPlay = this.canPlay;
    this.componentRef.instance.complete.subscribe(() => {
      this.puzzleComplete();
    })
    this.loaded = true;
  }

  returnClicked() : void {
    this.playerService.dropLock(this.puzzle);
    this.return.emit();
  }

  puzzleComplete() : void {
    this.playerService.completePuzzle(this.puzzle);
  }

}
