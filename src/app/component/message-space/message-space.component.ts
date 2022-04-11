import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../service/message.service";
import { ChatMessage, MessageType } from "../../model/chatMessage";

@Component({
  selector: "app-message-space",
  templateUrl: "./message-space.component.html",
  styleUrls: ["./message-space.component.sass"]
})
export class MessageSpaceComponent implements OnInit {
  messages: any = this.messageService.messages;
  currentUsername: string = window.sessionStorage.getItem("username");

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.initializeWebSocketConnection();
    this.sendMessage(this.currentUsername);
  }

  private sendMessage(username: string): void {
    let message: ChatMessage = {
      sender: username,
      type: MessageType.JOIN
    };
    this.messageService.sendMessage(message);
  }
}
