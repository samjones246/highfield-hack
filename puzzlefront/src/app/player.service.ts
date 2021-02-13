import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players = this.socket.fromEvent<string[]>('update_players');
  myId = this.socket.fromEvent<string>('join');
  count = this.socket.fromEvent<number>('update_count')

  constructor(private socket: Socket) { }

  sendClick(){
    this.socket.emit('click');
  }
}
