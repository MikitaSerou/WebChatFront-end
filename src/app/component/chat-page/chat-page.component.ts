import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { MessageService } from "../../service/message.service";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.sass"]
})
export class ChatPageComponent implements OnInit, AfterViewChecked, OnDestroy {
  username: string | undefined | null =
    window.sessionStorage.getItem("username");

  @ViewChild("scrollMe") private myScrollContainer: ElementRef;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.initializeWebSocketConnection(this.username);
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

  ngOnDestroy() {
    window.sessionStorage.removeItem("username");
  }
}
