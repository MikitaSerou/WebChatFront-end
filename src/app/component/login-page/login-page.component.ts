import { Component } from "@angular/core";
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
export class LoginPageComponent {
  loginForm: FormGroup;
  username: FormControl = new FormControl("", [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
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
}
