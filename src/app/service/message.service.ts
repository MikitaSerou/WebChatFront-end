import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { ChatMessage, MessageType } from "../model/chatMessage";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  public stompClient: any;
  public messages: any = [];
  public ws: any;

  constructor() {}

  initializeWebSocketConnection() {
    const serverUrl = `${environment.CONNECTION_URL}/ws/`;
    this.ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(this.ws);
    const that = this;
    this.stompClient.connect({}, function () {
      that.stompClient.subscribe("/topic/publicChatRoom", (message: any) => {
        if (message.body) {
          // @ts-ignore
          that.messages.push(message.body);
        }
      });
    });
  }

  addUserMessage(message: ChatMessage) {
    this.stompClient.send("/app/chat.addUser", {}, JSON.stringify(message));
  }

  sendMessage(message: ChatMessage) {
    this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
  }

  sendMessageFromScratch(sender: string, type: MessageType, content?: string) {
    this.sendMessage({
      sender: sender,
      type: type,
      content: content
    });
  }

  disconnect() {
    this.messages = [];
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    this.ws.close();
    console.log("Disconnected");
  }
}
