import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-textarea-tool",
  templateUrl: "./textarea-tool.component.html",
  styleUrls: ["./textarea-tool.component.sass"]
})
export class TextareaToolComponent implements OnInit {
  messageForm: FormGroup;
  messageText: FormControl = new FormControl("");

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      messageText: this.messageText
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.messageForm.value);
    this.messageText.reset();
  }
}
