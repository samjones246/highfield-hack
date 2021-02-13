import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players = this.socket.fromEvent<string[]>('update_players');
  myId = this.socket.fromEvent<string>('join');
  count = this.socket.fromEvent<number>('update_count');
  puzzles = this.socket.fromEvent<Boolean[]>('update-puzzles');

  constructor(private socket: Socket) { }

  sendClick(){
    this.socket.emit('click');
  }

  completePuzzle(id){
    this.socket.emit("puzzle-complete", id);
  }

  reset(){
    this.socket.emit("reset");
  }
}
