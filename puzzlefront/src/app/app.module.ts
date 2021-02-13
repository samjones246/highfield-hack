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
const config: SocketIoConfig = { url: 'http://82.19.126.118:3434', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ClickcounterComponent,
    BoardComponent,
    CardComponent,
    PuzzleViewerComponent
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
