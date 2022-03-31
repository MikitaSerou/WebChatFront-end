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

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: this.username
    });
  }

  // openLoginFailedSnackBar() {
  //   if (this.isLoginFailed)
  //     this._snackBar.open("Login failed. Check your credentials.", "", {
  //       panelClass: ["snackbar-error"],
  //       duration: 3000
  //     });
  // }

  onSubmit(): void {
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
}
