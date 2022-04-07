import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./component/login-page/login-page.component";
import { ErrorPageComponent } from "./component/error-page/error-page.component";
import { ChatPageComponent } from "./component/chat-page/chat-page.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginPageComponent },
  { path: "chat", component: ChatPageComponent, canActivate: [AuthGuard] },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
