import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  players : Observable<string[]>;
  myId : Observable<string>;
  constructor(private playerService : PlayerService) {
    this.players = playerService.players;
    this.myId = playerService.myId;
  }

  ngOnInit(): void {
  }

}
