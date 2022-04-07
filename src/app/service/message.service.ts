import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  public stompClient: any;
  public msg: any = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const serverUrl = environment.SOCKET_CONNECTION_URL;
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function () {
      that.stompClient.subscribe("topic", (message: any) => {
        if (message.body) {
          // @ts-ignore
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(mesage: any) {
    this.stompClient.send("/app/topic/publicChatRoom", mesage);
  }
}
