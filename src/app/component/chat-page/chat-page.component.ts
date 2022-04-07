import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.sass"]
})
export class ChatPageComponent implements OnInit {
  username: string | undefined | null =
    window.sessionStorage.getItem("username");

  constructor() {}

  ngOnInit(): void {}
}
