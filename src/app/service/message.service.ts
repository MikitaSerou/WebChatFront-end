import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { BrokerMessage, MessageType } from "../model/broker-message";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  public stompClient: any;
  public messages: BrokerMessage[] = [];
  public ws: any;
  isConnected: boolean = false;

  constructor() {}

  initializeWebSocketConnection(username: string) {
    if (this.isConnected == false) {
      setTimeout(() => this.connect(username), 300);
    } else {
      this.connect(username);
    }
  }

  private connect(username: string) {
    const serverUrl = `${environment.CONNECTION_URL}/ws/`;
    this.ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(this.ws);
    const that = this;
    this.stompClient.connect({}, function () {
      that.subscribeToTopic(that);
      that.addUserMessage(username);
    });
    that.isConnected = true;
  }

  private subscribeToTopic(that: this) {
    that.stompClient.subscribe("/topic/publicChatRoom", (message: any) => {
      if (message.body) {
        that.messages.push(message.body);
      }
    });
  }

  addUserMessage(username: string) {
    let joinMessage = {
      sender: username,
      type: MessageType.JOIN,
      date: new Date()
    };
    this.stompClient.send("/app/chat.addUser", {}, JSON.stringify(joinMessage));
  }

  sendMessage(message: BrokerMessage) {
    message.date = new Date();
    this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
  }

  sendMessageFromScratch(sender: string, type: MessageType, content?: string) {
    this.sendMessage({
      sender: sender,
      type: type,
      content: content,
      date: new Date()
    });
  }

  disconnect() {
    this.isConnected = false;
    this.messages = [];
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    this.ws.close();
    console.log("Disconnected");
  }
}
