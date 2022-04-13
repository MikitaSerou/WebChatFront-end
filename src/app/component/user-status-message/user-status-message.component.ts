import { Component, Input, OnInit } from "@angular/core";
import { ChatMessage, MessageType } from "../../model/chatMessage";

@Component({
  selector: "app-user-status-message",
  templateUrl: "./user-status-message.component.html",
  styleUrls: ["./user-status-message.component.sass"]
})
export class UserStatusMessageComponent implements OnInit {
  @Input() messageJSON: any;
  message: ChatMessage;
  isJoinMessage: boolean;
  isLeaveMessage: boolean;

  constructor() {}

  ngOnInit(): void {
    this.message = JSON.parse(this.messageJSON);
    this.setTypeOfMessage(this.message.type);
  }

  private setTypeOfMessage(type: MessageType) {
    if (type == MessageType.JOIN) {
      this.isJoinMessage = true;
    } else if (type == MessageType.LEAVE) {
      this.isLeaveMessage = true;
    }
  }
}
