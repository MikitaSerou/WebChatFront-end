import { Component, Input, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { LogoutDialogComponent } from "../logout-dialog/logout-dialog.component";
import { MessageService } from "../../service/message.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  @Input() username: string;
  appName: string = environment.APP_NAME;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(LogoutDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.logout();
      }
    });
  }

  logout() {
    this.messageService.disconnect();
    window.sessionStorage.removeItem("username");
    this.router.navigate(["/login"]);
  }
}
