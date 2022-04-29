import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { BrokerMessage, MessageType } from "../model/broker-message";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  public stompClient: any;
  public messages: BrokerMessage[] = [];
  public ws: any;
  private manualDisconnected: boolean = false;
  private disconnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  initializeWebSocketConnection(username: string) {
    this.manualDisconnected = false;
    const serverUrl = `${environment.CONNECTION_URL}/ws/`;
    this.ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(this.ws);
    this.connect(username);
    console.log("Connected to topic");
  }

  private connect(username: string) {
    const that = this;
    this.stompClient.connect(
      "",
      "",
      () => {
        that.setConnectedStatus(false);
        that.subscribeToTopic(that);
        that.addUserMessage(username);
      },
      () => {
        console.log("Connection lost, Reconnecting");
        setTimeout(() => that.initializeWebSocketConnection(username), 500);
      },
      () => {
        if (!this.manualDisconnected) {
          console.log("Connection closed, Reconnecting");
          setTimeout(() => that.initializeWebSocketConnection(username), 500);
        }
      }
    );
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
    this.manualDisconnected = true;
    this.setConnectedStatus(true);
    this.messages = [];
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    this.ws.close();
    console.log("Disconnected");
  }

  isDisconnected(): BehaviorSubject<boolean> {
    return this.disconnected;
  }

  setConnectedStatus(status: boolean) {
    this.disconnected.next(status);
  }
}
