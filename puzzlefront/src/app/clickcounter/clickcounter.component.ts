import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-clickcounter',
  templateUrl: './clickcounter.component.html',
  styleUrls: ['./clickcounter.component.scss']
})
export class ClickcounterComponent implements OnInit {
  count : Observable<number>;
  constructor(private playerService : PlayerService) { 
    this.count = playerService.count;
  }

  ngOnInit(): void {
  }

  sendClick() {
    this.playerService.sendClick()
  }

}
