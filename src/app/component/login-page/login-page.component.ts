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
  hide: boolean = true;
  loginForm: FormGroup;
  username: FormControl = new FormControl("", [Validators.required]);
  submitted: boolean = false;

  messages: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: this.username
    });
  }

  addMessage() {
    this.messages.push("kaka");
  }

  onSubmit(): void {
    window.sessionStorage.setItem("username", this.username.value);
    this.router.navigate(["/chat"]);
    // this.authService
    //   .login(this.loginForm.value.username, this.loginForm.value.password)
    //   .subscribe(
    //     (data) => {
    //       this.authService.saveToken(data.token);
    //       this.authService.saveUser(data);
    //       this.isLoginFailed = false;
    //       this.isLoggedIn = true;
    //       this.router.navigate(['/']);
    //     },
    //     (error) => {
    //       this.errorMessage = error.message;
    //       this.isLoginFailed = true;
    //       console.log(error);
    //       this.openLoginFailedSnackBar();
    //     }
    //   );
  }

  reloadPage(): void {
    window.location.reload();
  }

  // openLoginFailedSnackBar() {
  //   if (this.isLoginFailed)
  //     this._snackBar.open("This login is taken :(", "", {
  //       panelClass: ["snackbar-error"],
  //       duration: 3000
  //     });
  // }
}
