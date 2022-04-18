import { Component, OnInit } from "@angular/core";
import { MessageService } from "../../service/message.service";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.sass"]
})
export class ErrorPageComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    window.sessionStorage.removeItem("username");
    this.messageService.disconnect();
  }
}
