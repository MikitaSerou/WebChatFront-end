import { Component, OnDestroy, OnInit } from "@angular/core";
import { MessageService } from "../../service/message.service";
import { BrokerMessage, MessageType } from "../../model/broker-message";

@Component({
  selector: "app-message-space",
  templateUrl: "./message-space.component.html",
  styleUrls: ["./message-space.component.sass"]
})
export class MessageSpaceComponent implements OnInit, OnDestroy {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  isConnectOrDisconnectMessage(message: any) {
    let parsedMessage: BrokerMessage = JSON.parse(message);
    return (
      parsedMessage.type == MessageType.JOIN ||
      parsedMessage.type == MessageType.LEAVE
    );
  }

  ngOnDestroy(): void {
    this.messageService.disconnect();
  }
}
