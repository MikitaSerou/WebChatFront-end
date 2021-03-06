import { Component, Input, OnInit } from "@angular/core";
import { BrokerMessage } from "../../model/broker-message";
import { enterFromSide } from "../../animations/animations";

enum FlexAlign {
  LEFT = "start center",
  RIGHT = "end center"
}

@Component({
  selector: "app-chat-message",
  templateUrl: "./chat-message.component.html",
  styleUrls: ["./chat-message.component.sass"],
  animations: [enterFromSide]
})
export class ChatMessageComponent implements OnInit {
  @Input() messageJSON: any;
  message: BrokerMessage;
  isOwnMessage: boolean;
  wrapperAlign: string;
  usernameAlign: string;
  animationDirection: string;

  constructor() {}

  ngOnInit(): void {
    this.message = JSON.parse(this.messageJSON);
    this.isOwnMessage =
      this.message.sender == window.sessionStorage.getItem("username");
    this.animationDirection = this.isOwnMessage
      ? "translateX(+100%)"
      : "translateX(-100%)";
    this.setAlign();
  }

  setAlign() {
    if (this.isOwnMessage) {
      this.wrapperAlign = FlexAlign.RIGHT;
      this.usernameAlign = FlexAlign.RIGHT;
    } else {
      this.wrapperAlign = FlexAlign.LEFT;
      this.usernameAlign = FlexAlign.LEFT;
    }
  }
}
