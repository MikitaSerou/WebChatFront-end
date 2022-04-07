import { Component, Input, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  @Input() username: string;
  appName: string = environment.APP_NAME;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    window.sessionStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }
}
