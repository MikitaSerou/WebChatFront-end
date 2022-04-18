import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "../../service/message.service";
import { MessageType } from "../../model/broker-message";

@Component({
  selector: "app-textarea-tool",
  templateUrl: "./textarea-tool.component.html",
  styleUrls: ["./textarea-tool.component.sass"]
})
export class TextareaToolComponent implements OnInit, AfterViewInit {
  messageForm: FormGroup;
  messageText: FormControl = new FormControl("");
  @ViewChild("input") private input: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private changeDetector: ChangeDetectorRef
  ) {
    this.messageForm = this.formBuilder.group({
      messageText: this.messageText
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setFocusOnInput();
    this.changeDetector.detectChanges();
  }

  private setFocusOnInput() {
    this.input.nativeElement.focus();
  }

  onSubmit() {
    let content: string = this.messageForm.value.messageText;
    if (content)
      this.sendMessage(window.sessionStorage.getItem("username"), content);
    this.messageText.reset();
    this.setFocusOnInput();
  }

  private sendMessage(username: string, content: string): void {
    this.messageService.sendMessageFromScratch(
      username,
      MessageType.CHAT,
      content
    );
  }
}
