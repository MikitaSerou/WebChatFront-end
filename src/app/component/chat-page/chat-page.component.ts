import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.sass"]
})
export class ChatPageComponent implements OnInit, AfterViewChecked {
  username: string | undefined | null =
    window.sessionStorage.getItem("username");

  @ViewChild("scrollMe") private myScrollContainer: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
