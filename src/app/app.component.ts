import { Component } from "@angular/core";
import { fadeAnimation } from "./animations/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  animations: [fadeAnimation]
})
export class AppComponent {}
