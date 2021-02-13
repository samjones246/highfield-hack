import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  id : string;
  players = this.socket.fromEvent<string[]>('update_players');
  myId = this.socket.fromEvent<string>('join');
  count = this.socket.fromEvent<number>('update_count');
  puzzles = this.socket.fromEvent<Boolean[]>('update-puzzles');
  locks = this.socket.fromEvent<any[]>("update-locks");

  constructor(private socket: Socket) {
    this.myId.subscribe(id => {
      this.id = id;
    })
  }

  sendClick(){
    this.socket.emit('click');
  }

  completePuzzle(id){
    this.socket.emit("puzzle-complete", id);
  }

  reset(){
    this.socket.emit("reset");
  }

  tryLockPuzzle(id){
    this.socket.emit("get-lock", id);
  }

  dropLock(id){
    this.socket.emit("drop-lock", id);
  }
}
