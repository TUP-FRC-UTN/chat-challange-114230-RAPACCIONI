import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-user',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './message-user.component.html',
  styleUrl: './message-user.component.css'
})
export class MessageUserComponent {
  @Input() user: string = '';
  @Output() messageSent = new EventEmitter<{user: string, text: string}>();
  message: string = '';


  sendMessage() {
    if(this.message.trim()){
      this.messageSent.emit({user: this.user, text: this.message})
      this.message = '';
    }
  }
  
}
