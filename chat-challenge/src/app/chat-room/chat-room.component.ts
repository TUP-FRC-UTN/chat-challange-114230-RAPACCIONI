import { Component } from '@angular/core';
import { MessageUserComponent } from '../message-user/message-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, MessageUserComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {
  user1 = 'Pepe';
  user2 = 'Maria';

  messages: {user: string, text: string}[] = [];

  addMessage(message: {user: string, text: string}){
    this.messages.push(message);
  }
}
