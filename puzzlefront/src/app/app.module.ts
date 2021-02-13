import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ClickcounterComponent } from './clickcounter/clickcounter.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { PuzzleViewerComponent } from './puzzle-viewer/puzzle-viewer.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BasePuzzleComponent } from './base-puzzle/base-puzzle.component';
import { PuzzleSequenceAComponent } from './puzzle-sequence-a/puzzle-sequence-a.component';
import { PuzzleDirective } from './puzzle-directive';
import { PuzzleSequenceBComponent } from './puzzle-sequence-b/puzzle-sequence-b.component';
import { PuzzleCrosswordComponent } from './puzzle-crossword/puzzle-crossword.component';
import { CrosswordGridComponent } from './crossword-grid/crossword-grid.component';
const config: SocketIoConfig = { url: 'http://82.19.126.118:3434', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ClickcounterComponent,
    BoardComponent,
    CardComponent,
    PuzzleViewerComponent,
    BasePuzzleComponent,
    PuzzleSequenceAComponent,
    PuzzleDirective,
    PuzzleSequenceBComponent,
    PuzzleCrosswordComponent,
    CrosswordGridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SocketIoModule.forRoot(config),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
