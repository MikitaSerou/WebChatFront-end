import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "../../service/message.service";
import { MessageType } from "../../model/chatMessage";

@Component({
  selector: "app-textarea-tool",
  templateUrl: "./textarea-tool.component.html",
  styleUrls: ["./textarea-tool.component.sass"]
})
export class TextareaToolComponent implements OnInit {
  messageForm: FormGroup;
  messageText: FormControl = new FormControl("");

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.messageForm = this.formBuilder.group({
      messageText: this.messageText
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.messageForm.value);
    this.sendMessage(
      window.sessionStorage.getItem("username"),
      this.messageForm.value.messageText
    );
    this.messageText.reset();
  }

  private sendMessage(username: string, content: string): void {
    this.messageService.sendMessageFromScratch(
      username,
      MessageType.CHAT,
      content
    );
  }
}
