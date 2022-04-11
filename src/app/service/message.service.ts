import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { ChatMessage } from "../model/chatMessage";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  public stompClient: any;
  public messages: any = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const serverUrl = environment.SOCKET_CONNECTION_URL;
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
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

  sendMessage(message: ChatMessage) {
    this.stompClient.send("/app/chat.addUser", {}, JSON.stringify(message));
  }

  sendMessageFromScratch(sender: string, message: string, content?: string) {
    this.stompClient.send("/app/chat.addUser", {}, JSON.stringify(message));
  }

  disconnect() {
    this.messages = [];
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }
}
