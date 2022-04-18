import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.sass"]
})
export class LoginPageComponent implements AfterViewInit {
  loginForm: FormGroup;
  username: FormControl = new FormControl("", [Validators.required]);
  @ViewChild("input") private input: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {
    this.loginForm = this.formBuilder.group({
      username: this.username
    });
  }

  onSubmit(): void {
    let usernameFromForm: string = this.username.value;
    window.sessionStorage.setItem("username", usernameFromForm);
    this.router.navigate(["/chat"]);
  }

  ngAfterViewInit(): void {
    this.setFocusOnInput();
    this.changeDetector.detectChanges();
  }

  private setFocusOnInput() {
    this.input.nativeElement.focus();
  }
}
