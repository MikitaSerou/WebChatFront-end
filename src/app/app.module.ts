import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { MessageSpaceComponent } from "./component/message-space/message-space.component";
import { TextareaToolComponent } from "./component/textarea-tool/textarea-tool.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";
import { MessageComponent } from "./component/message/message.component";
import { MatChipsModule } from "@angular/material/chips";
import { AvatarModule } from "ngx-avatar";
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from "./component/login-page/login-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorPageComponent } from "./component/error-page/error-page.component";
import { ChatPageComponent } from "./component/chat-page/chat-page.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { UserStatusMessageComponent } from "./component/user-status-message/user-status-message.component";
import { MatDialogModule } from "@angular/material/dialog";
import { LogoutDialogComponent } from "./component/logout-dialog/logout-dialog.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageSpaceComponent,
    TextareaToolComponent,
    MessageComponent,
    LoginPageComponent,
    ErrorPageComponent,
    ChatPageComponent,
    UserStatusMessageComponent,
    LogoutDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    FlexModule,
    FlexLayoutModule,
    MatChipsModule,
    MatSnackBarModule,
    AvatarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatRippleModule,
    MatSelectModule,
    MatRadioModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
