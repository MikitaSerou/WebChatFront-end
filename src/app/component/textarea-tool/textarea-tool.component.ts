import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "../../service/message.service";
import { ChatMessage, MessageType } from "../../model/chatMessage";

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
    this.sendMessage(this.messageForm.value.messageText);
    this.messageText.reset();
  }

  private sendMessage(username: string): void {
    let message: ChatMessage = {
      sender: username,
      type: MessageType.JOIN
    };
    this.messageService.sendMessage(message);
  }
}
