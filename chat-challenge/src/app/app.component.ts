import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import { MessageUserComponent } from "./message-user/message-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatRoomComponent, MessageUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  messages: {user: string, text: string}[] = []

  addMessage(newMessage: {user: string, text: string}){
    this.messages.push(newMessage)
  }
}
